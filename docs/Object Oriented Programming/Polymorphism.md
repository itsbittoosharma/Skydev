## What is Polymorphism?
Polymorphism is composed of two words - “poly” which means “many”, and “morph”
which means “shapes”. Therefore Polymorphism refers to something that has many
shapes.
In OOPs, Polymorphism refers to the process by which some code, data, method, or
object behaves differently under different circumstances or contexts. Compile-time
polymorphism and Run time polymorphism are the two types of polymorphisms in
OOPs languages.
1. What is Compile time Polymorphism and how is it different
from Runtime Polymorphism?
Compile Time Polymorphism: Compile time polymorphism, also known as Static
Polymorphism, refers to the type of Polymorphism that happens at compile time.
What it means is that the compiler decides what shape or value has to be taken by
the entity in the picture.
```
class CompileTimePolymorphism{
// 1st method with name add
public int add(int x, int y){
return x+y;
}
// 2nd method with name add
public int add(int x, int y, int z){
return x+y+z;
}
// 3rd method with name add
public int add(double x, int y){
return (int)x+y;
}
// 4th method with name add
public int add(int x, double y){
return x+(int)y;
}
}
class Test{
public static void main(String[] args){
CompileTimePolymorphism demo=new CompileTimePolymorphism();
// In the below statement, the Compiler looks at the argument types and decides to c
System.out.println(demo.add(2,3));
// Similarly, in the below statement, the compiler calls method 2
System.out.println(demo.add(2,3,4));
// Similarly, in the below statement, the compiler calls method 4
System.out.println(demo.add(2,3.4));
// Similarly, in the below statement, the compiler calls method 3
System.out.println(demo.add(2.5,3));
}
}
```
In the above example, there are four versions of add methods. The first method takes
two parameters while the second one takes three. For the third and fourth methods,
there is a change of order of parameters. The compiler looks at the method signature
and decides which method to invoke for a particular method call at compile time.
Runtime Polymorphism: Runtime polymorphism, also known as Dynamic
Polymorphism, refers to the type of Polymorphism that happens at the run time.
What it means is it can't be decided by the compiler. Therefore what shape or value
has to be taken depends upon the execution. Hence the name Runtime
Polymorphism.
```
class AnyVehicle{
public void move(){
System.out.println(“Any vehicle should move!!”);
}
}
class Bike extends AnyVehicle{
public void move(){
System.out.println(“Bike can move too!!”);
}
}
class Test{
public static void main(String[] args){
AnyVehicle vehicle = new Bike();
// In the above statement, as you can see, the object vehicle is of type AnyVehicle
// But the output of the below statement will be “Bike can move too!!”,
// because the actual implementation of object ‘vehicle’ is decided during runtime v
vehicle = new AnyVehicle();
// Now, the output of the below statement will be “Any vehicle should move!!”,
vehicle.move();
}
}
```
2. How does C++ support Polymorphism?
C++ is an Object-oriented programming language and it supports Polymorphism as
well:
##### Compile Time Polymorphism: 
C++ supports compile-time polymorphism with
the help of features like templates, function overloading, and default
arguments.
##### Runtime Polymorphism: 
C++ supports Runtime polymorphism with the help of
features like virtual functions. Virtual functions take the shape of the functions
based on the type of object in reference and are resolved at runtime.

3. What is meant by static polymorphism?
Static Polymorphism is commonly known as the Compile time polymorphism. Static
polymorphism is the feature by which an object is linked with the respective function
or operator based on the values during the compile time. Static or Compile time
Polymorphism can be achieved through Method overloading or operator
overloading.

4. What is meant by dynamic polymorphism?
Dynamic Polymorphism or Runtime polymorphism refers to the type of
Polymorphism in OOPs, by which the actual implementation of the function is
decided during the runtime or execution. The dynamic or runtime polymorphism can
be achieved with the help of method overriding.

