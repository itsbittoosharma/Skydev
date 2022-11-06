## OOPs Coding Problems

1. What is the output of the below code?
```
#include<iostream>
using namespace std;
class BaseClass1 {
public:
BaseClass1()
{ cout << " BaseClass1 constructor called" << endl; }
};
class BaseClass2 {
public:
BaseClass2()
{ cout << "BaseClass2 constructor called" << endl; }
};
class DerivedClass: public BaseClass1, public BaseClass2 {
public:
DerivedClass()
{ cout << "DerivedClass constructor called" << endl; }
};
int main()
{
DerivedClass derived_class;
return 0;
}
```
##### Output
BaseClass1 constructor called
BaseClass2 constructor called
DerivedClass constructor called

2. What will be the output of the below code?
```
class Scaler
{
static int i;
static
{
System.out.println(“a”);
i = 100;
}
}
public class StaticBlock
{
static
{
System.out.println(“b”);
}
public static void main(String[] args)
{
System.out.println(“c”);
System.out.println(Scaler.i);
}
}
```
##### Output
b
c
a
100

3. Predict the output?
```
#include<iostream>
using namespace std;
class ClassA {
public:
ClassA(int ii = 0) : i(ii) {}
void show() { cout << "i = " << i << endl;}
private:
int i;
};
class ClassB {
public:
ClassB(int xx) : x(xx) {}
operator ClassA() const { return ClassA(x); }
private:
int x;
};
void g(ClassA a)
{ a.show(); }
int main() {
ClassB b(10);
g(b);
g(20);
getchar();
return 0;
}
```
##### Output
i = 10
i = 20