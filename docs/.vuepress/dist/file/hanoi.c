#include <stdio.h>
#include <stdlib.h>

#define MAX_STACK_SIZE 1000

// 定义状态结构
typedef struct {
    int n;          // 盘子数量
    char from;      // 起始柱
    char via;       // 辅助柱
    char to;        // 目标柱
} State;

// 栈结构
typedef struct {
    State items[MAX_STACK_SIZE];
    int top;
} Stack;

// 初始化栈
void initStack(Stack *s) {
    s->top = -1;
}

// 压栈操作
void push(Stack *s, State state) {
    if (s->top >= MAX_STACK_SIZE - 1) {
        fprintf(stderr, "Stack overflow\n");
        exit(EXIT_FAILURE);
    }
    s->items[++(s->top)] = state;
}

// 弹栈操作
State pop(Stack *s) {
    if (s->top < 0) {
        fprintf(stderr, "Stack underflow\n");
        exit(EXIT_FAILURE);
    }
    return s->items[(s->top)--];
}

// 非递归汉诺塔求解
void hanoi(int n) {
    Stack stack;
    initStack(&stack);
    
    // 初始状态：将n个盘子从A柱通过B柱移动到C柱
    push(&stack, (State){n, 'A', 'B', 'C'});
    
    while (stack.top >= 0) {
        State cur = pop(&stack);
        
        if (cur.n == 1) {
            // 直接移动：从起始柱到目标柱
            printf("%c -> %c\n", cur.from, cur.to);
        } else {
            // 分解状态（注意压栈顺序与执行顺序相反）
            // 第三步：将n-1个盘子从辅助柱移回目标柱
            push(&stack, (State){cur.n - 1, cur.via, cur.from, cur.to});
            // 第二步：移动最底下的一个盘子
            push(&stack, (State){1, cur.from, cur.via, cur.to});
            // 第一步：将n-1个盘子移到辅助柱
            push(&stack, (State){cur.n - 1, cur.from, cur.to, cur.via});
        }
    }
}

int main() {
    int n;
    printf("Enter number of disks: ");
    scanf("%d", &n);
    
    if (n <= 0) {
        printf("Number of disks should be positive.\n");
        return 1;
    }
    
    hanoi(n);
    return 0;
}