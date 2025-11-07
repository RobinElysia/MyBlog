---

sidebar: false
title: CreateProcess + STARTUPINFO + 管道重定向
description: CreateProcess + STARTUPINFO + 管道重定向
date: 2025-09-20
timeline: true
head:
  - - meta
    - name: keywords
      content: CreateProcess + STARTUPINFO + 管道重定向
  - - meta
    - name: description
      content: CreateProcess + STARTUPINFO + 管道重定向
  - - meta
    - name: author
      content: RobinElysia
category:
  - RobinElysia
tag:
  - code

---

```cpp
#include <windows.h>
#include <stdio.h>

int main() {
    // ---------------- SECURITY ATTRIBUTES ----------------
    // This structure defines handle inheritance behavior.
    // bInheritHandle = TRUE means created handles can be inherited by child processes.
    SECURITY_ATTRIBUTES sa;
    sa.nLength = sizeof(SECURITY_ATTRIBUTES);
    sa.bInheritHandle = TRUE;   // allow handle inheritance
    sa.lpSecurityDescriptor = NULL;

    HANDLE hChildStdoutRd = NULL; // Parent will read from this (child's stdout)
    HANDLE hChildStdoutWr = NULL; // Child will write to this (stdout)
    HANDLE hChildStdinRd  = NULL; // Child will read from this (stdin)
    HANDLE hChildStdinWr  = NULL; // Parent will write to this (stdin)

    // ---------------- CREATE PIPE FOR STDOUT ----------------
    // Create a pipe that redirects child process's stdout to the parent.
    if (!CreatePipe(&hChildStdoutRd, &hChildStdoutWr, &sa, 0)) {
        fprintf(stderr, "Stdout pipe creation failed\n");
        return 1;
    }
    // Prevent parent from accidentally inheriting the read end of stdout.
    // We want only the parent to use hChildStdoutRd, not the child.
    SetHandleInformation(hChildStdoutRd, HANDLE_FLAG_INHERIT, 0);

    // ---------------- CREATE PIPE FOR STDIN ----------------
    // Create a pipe that redirects parent's input into the child process's stdin.
    if (!CreatePipe(&hChildStdinRd, &hChildStdinWr, &sa, 0)) {
        fprintf(stderr, "Stdin pipe creation failed\n");
        return 1;
    }
    // Prevent parent from inheriting the write end of stdin (child should not inherit it).
    SetHandleInformation(hChildStdinWr, HANDLE_FLAG_INHERIT, 0);

    // ---------------- SETUP STARTUPINFO ----------------
    // This structure tells CreateProcess which standard handles to use for the child.
    STARTUPINFO si;
    ZeroMemory(&si, sizeof(STARTUPINFO));
    si.cb = sizeof(STARTUPINFO);

    // Redirect child's stdin, stdout, stderr to our pipe ends.
    si.hStdInput  = hChildStdinRd;
    si.hStdOutput = hChildStdoutWr;
    si.hStdError  = hChildStdoutWr;  // Redirect stderr to same as stdout

    // STARTF_USESTDHANDLES tells CreateProcess to use the above handles.
    si.dwFlags |= STARTF_USESTDHANDLES;

    PROCESS_INFORMATION pi;
    ZeroMemory(&pi, sizeof(PROCESS_INFORMATION));

    // ---------------- CREATE CHILD PROCESS ----------------
    // Launch "cmd.exe" with redirected input/output.
    if (!CreateProcess(
        NULL,                // Application name (NULL means use command line instead)
        (LPSTR)"cmd.exe",    // Command line (child process to run)
        NULL,                // Process security attributes
        NULL,                // Thread security attributes
        TRUE,                // Must be TRUE to allow handle inheritance
        0,                   // Creation flags
        NULL,                // Use parent's environment variables
        NULL,                // Use parent's current directory
        &si,                 // STARTUPINFO with redirected handles
        &pi                  // PROCESS_INFORMATION receives process/thread handles
    )) {
        fprintf(stderr, "CreateProcess failed (%d)\n", GetLastError());
        return 1;
    }

    // ---------------- CLOSE UNUSED HANDLES ----------------
    // The parent process does not need to hold onto these anymore.
    CloseHandle(hChildStdoutWr); // parent only reads from stdout, not write
    CloseHandle(hChildStdinRd);  // parent only writes to stdin, not read

    // ---------------- WRITE TO CHILD'S STDIN ----------------
    // Send a command ("dir\n") to the child process (cmd.exe).
    const char *msg = "dir\n";
    DWORD written;
    WriteFile(hChildStdinWr, msg, (DWORD)strlen(msg), &written, NULL);

    // Close parent's write end of stdin to signal EOF to the child.
    CloseHandle(hChildStdinWr);

    // ---------------- READ FROM CHILD'S STDOUT ----------------
    // Read whatever output cmd.exe produces and print it to parent's stdout.
    char buffer[4096];
    DWORD readBytes;
    while (ReadFile(hChildStdoutRd, buffer, sizeof(buffer)-1, &readBytes, NULL) && readBytes > 0) {
        buffer[readBytes] = '\0';  // Null-terminate buffer
        printf("%s", buffer);      // Print child's output to parent console
    }

    // ---------------- WAIT FOR CHILD TO FINISH ----------------
    WaitForSingleObject(pi.hProcess, INFINITE);

    // ---------------- CLEAN UP ----------------
    CloseHandle(hChildStdoutRd);
    CloseHandle(pi.hProcess);
    CloseHandle(pi.hThread);

    return 0;
}

```