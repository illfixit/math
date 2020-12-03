/* YouTube freeCodeCamp.org
Precalculus Course

https://www.youtube.com/watch?v=eI4an8aSsgw

5:22:01

Start

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Definition.
A function is correspondence between input numbers (x-values) and output 
numbers (y-value) that sends each input number (x-value) to exactly one
output number (y-value)

x-value -> function -> y-value

Sometimes, a function is described with an equation.

Example. y = x^2 + 1, which can also be written as f(x) = x^2 + 1
What is f(2)? 
f(2) = 2^2 + 1 = 5
f(5) = 5^2 + 1 = 26

What is f(a+3)?
f(a+3) = (a+3)^2 + 1 = a^2 + 6a + 9 + 1 = a^2 + 6a + 10

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sometimes, a function is described with a graph.

Example. The graph of y = g(x) is shown below.

	 | /
_____|/____
	/|
   / |
Graph :)

What is f(2)? f(x-value) -> f(2) = 3;
What is f(5)? ---------- -> f(5) is undefined (does not exist)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The domain of a function is all possible x-values. 
The range is the y-values.

Example. What is the domain and range of the function g(x) graphed below?

... Graph :)

Domain for f(x) -8 <= x <= 4 [-8, 4]
Range for f(x) -5 <= y <= 3  [-5, 3]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. What are the domains of these function?

To find domain

1) Exclude x-values that make denominator 0
2) Exclude x-values that make an expression inside a square (even) root
negative

A. g(x) = x / (x^2 - 4x + 3)

	1) Exclude x^2 - 4x + 3 = 0

	x^2 - 4x + 3 = 0
	(x-3)(x-1) = 0
	x = 3 or x = 1


	Domain:        1    3              
	<--------------o----o--------------->

	Domain: (-Inf, 1) v (1,3) v (3, +Inf)


B. f(x) = (3-2x)^1/2

	1) No denominator
	2) Exclude 3-2x < 0

	Exclude
	3 - 2x < 0
	-2x < -3
	2x > 3
	x > 1.5

	It means
	Include x <= 1.5

	Domain:               1.5
	<+++++++++++++++++++++++---------------------->

	Domain: (-Inf, 1.5]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

C. h(x) = (3-2x)^1/2 / (x^2 - 4x + 3)

1) Exclude x^2 - 4x + 3 = 0 AND
2) Exclude 3-2x < 0

1) x != 1, x != 3 AND
2) x <= 1.5

Domain:         1  1.5         3
<+++++++++++++++o++++--------------------->

Domain: (-Inf, 1) v (1, 1.5]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Increasing and Decreasing Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Which function in increasing? Which is decreasing?

	 | /               \ |
_____|/____        _____\|______
	/|                   |\
   / |                   | \

 increasing          decreasing
when x2 > x1        when x2 > x1  
f(x2) > f(x1)      f(x2) < f(x1))


Example. On what intervals is the function graphed below increasing?
Decreasing?

      y^
       |  _______
       | /       \
       |/         \
-\----/|-----------\------> x
  \__/ |            \
       |             \
       |
       |

Decreasing [-4, -2) v (4, 7]
Increasing (-2, 1)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Maximums and Minimums

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Definition. A function f(x) has an absolute maximum at x = c if the 
y-value at x = c is as big as it ever gets. <=> F(c) >= f(x) for all
x-values in the domain of function

The y-value f(c) is called the _absolute_maximum_value_of_f_,
and the point (c, f(c)) is called an _absolute_maximum_point_.

Definition. A function f(x) has an absolute minimum at x = c if

The y-value f(c) is called the _absolute_minimum_value_of_f_,
and the point (c, f(c)) is called an _absolute_minimum_point_.

10                                  /
|                                  /
|                                 /
|                                /
|                               /
|                              /
5                             /
|                            /
|                           /
|  ^                       /
| / \                     / 
|/   \                   /
0------------------------------------------
|      \               / 
|       \             /
|        \           / 
|         \         /
|          \       /
-5          \     / 
|            \   /
|             \ /
|			   v
|
|
-10

abs min value = -8
abs min point: (3,-8)
abs max value = 10 (or no abs max value if it continues forever)
abs max point: (4, 10) (or no abs max point if forever)

Definition. Absolute maximum and minimum values can also be called
_global_ max and min values

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Definition. A function f(x) has an local maximum at x = c if

f(c) >= f(x) for all x-values in an open interval around c

The y-value f(c) is called a _local_maximum_value_of_f_,
and the point (c, f(c)) is called a _local_maximum_point_.

Definition. A function f(x) has an local minimum at x = c if

f(c) <= f(x) for all x-values in an open interval around c

The y-value f(c) is called a _local_minimum_value_of_f_,
and the point (c, f(c)) is called a _local_minimum_point_.

10                                  /
|                                  /
|                                 /
|                                /
|                               /
|                              /
5                             /
|                            /
|                           /
|  ^                       /
| / \                     / 
|/   \                   /
0------------------------------------4------
|      \               /  Some sources do not
|       \             /  consider (4,10) to be
|        \           /  a local max point cause
|         \         /  it is in open interval
|          \       /
-5          \     / 
|            \   /
|             \ /
|			   v
|
|
-10

Domain [0, 4] =>

loc min value = 
loc min point: (3, -8)
loc max value =  
loc max point: (1,3)

Definition. Local maximum and minimum values can also be called
_relative_ max and min values

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Even and Odd functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Definition. A graph is symmetric with respect to the x-axis if
it has mirror symmetry with x-axis at the mirror line.

10                                  
|                                  
|                                 
|                                
|                               
|                             
5                             
|    /                       
|   /                        
|  /                      
| /                      
|/                      
0------------------------------------4------
|\
| \            
|  \      
|   \         
|    \       
-5         
|          
|			  
|
|
|
-10

Whenever a point(x, y) is on the graph, the point 
(x, -y) is also on the graph

Definition. A graph is symmetric with respect to the y-axis if
it has mirror symmetry with y-axis at the mirror line.

                         10                                  
                         |                                  
                         |                                 
                         |                                
                         |                               
                         |                             
        \                5                /             
         \               |               /            
          \              |              /             
           \             |             /          
            \            |            /          
             \           |           /          
-------------------------0--------------------------
               \        /|\        /
                \      / | \      /      
                 \    /  |  \    /  
                  \  /   |   \  /       
                   \/    |    \/       
                         -5         
                         |          
                         |			  
                         |
                         |
                         |
                         -10

Whenever a point(x, y) is on the graph, the point 
(-x, y) is also on the graph
                         
                         
Definition. A graph is symmetric with respect to the origin if
it has 180deg rotational symmetry around the origin

                         10                                  
                         |                                  
                         |                                 
                         |                                
                         |                  /             
                         |                 /            
                         5                /             
                   /\    |               /            
                  /  \   |              /             
                 /    \  |             /          
                /      \ |            /          
               /        \|           /          
-------------------------0--------------------------
             /           |\        /
            /            | \      /      
           /             |  \    /  
          /              |   \  /       
         /               |    \/       
        /                -5         
       /                 |          
      /                  |			  
                         |
                         |
                         -10


Whenever a point(x, y) is on the graph, the point 
(-x, -y) is also on the graph

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
31:37
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Transformations of Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Review of Function Notation
Example. Rewrite the following, if g(x) = x^1/2

a) g(x) - 2 = x^1/2 - 2
b) g(x-2) = (x-2)^1/2
c) g(3x) = (3x)^1/2
d) 3g(x) = 3*(x^1/2)
e) g(-x) = (-x)^1/2

Example. Rewrite the following in terms of g(x), if g(x) = x^1/2

f) x^1/2 + 17 = g(x) + 17
g) (x+12)^1/2 = g(x+12)
h) -36 * (x^1/2) = -36*g(x)
i) (1/4*x)^1/2 = g(1/4*x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Rules for transformations:

> Numbers on the outside of the function affect the y-values and
  result in vertical motions. THese motions are in the direction 
  you expect.

> Numbers on the inside of the function affect the x-values and
  result in horizontal motions. These motions go in the opposite
  direction from what you expect.

> Adding results in a shift (translations)

> Multiplying results in a stretch or shrink

> A negative sign results in a reflection

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

numbers on outside <-> y-values <-> vertical motions
numbers on inside <-> x-values <-> horizontal motions
adding / substraction <-> translations(shifts)
multiplying/dividing <-> stretches or shrinks
negative sign <-> reflection

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Piecewise Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. The function f is defined as follows:

       { -x^2 	if x < 1
f(x) = { 
       { -2*x + 3 if x >= 1

1. What is f(-2)? What is f(1) What is f(3)?
> x = -2 (x < 1) => f(x) = -x^2 => f(x) =  -(-2)^2 = -4
> x = 1 => f(1) = -2(1) + 3 = 1
> x = 3 => f(3) = -2(3) + 3 = -3

2. Graph y = f(x)

Graph... :)

3. Is f(x) continous?
- no

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~ 1:00:00

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Suppose f(x) is the function defined by the chart below:
  x  2 3 4 5
f(x) 3 5 6 1

In other words, f(2) = 3, f(3) = 5 etc...

Definition. 
The inverse function for f, written f^-1(x), undoes what f does

     x  3 5 6 1
f^-1(x) 2 3 4 5

In other words, f^-1(3) = 2, f^-1(5) = 3, f^-1(6) = 4, f^-1(1) = 5

Key Fact 1. Inverse functions reverse the roles of y and x.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Graph y = f(x) and y = f^-1(x) on the same axes below. What do you
notice about the points on the graph of y = f(x) and the points on the
graph of y = f^-1?

Graph... :)

     x  2 3 4 5
   f(x) 3 5 6 1

     x  3 5 6 1
f^-1(x) 2 3 4 5

Key Fact 2. The graph of y = f^-1(x) is obtained from the graph of
y = f(x) by reflecting over the line y = x.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     x  2 3 4 5
   f(x) 3 5 6 1

     x  3 5 6 1
f^-1(x) 2 3 4 5

In our same example, compute: ( 'o' is "composition")

f^-1 o f(2) = f^-1(f(2)) = f^-1(3) = 2
f^-1 o f(3) = f^-1(f(3)) = f^-1(5) = 3
f^-1 o f(4) = f^-1(f(4)) = f^-1(6) = 4
f^-1 o f(5) = f^-1(f(5)) = f^-1(1) = 5

f o f^-1(3) = f(f^-1(3)) = f(2) = 3
f o f^-1(5) = f(f^-1(5)) = f(3) = 5
f o f^-1(6) = f(f^-1(6)) = f(4) = 6
f o f^-1(1) = f(f^-1(1)) = f(5) = 1

Key Fact 3. f^-1 o f(x) = x and f o f^-1(x) = x. This is the
mathematical way of saying that f and f^-1 undo each other.

Example. f(x) = x^3. Guess what the inverse of f should be. Remember,
f^-1 undoes the work that f does.

f^-1(x) = x^1/3

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Find the inverse of the function:

f(x) = (5 - x) / 3x

y = (5 - x) / 3x

x = (5 - y) / 3y (reverse the roles of y and x)
				 (solve for y)

3yx = 5 - y
3yx + y = 5
y(3x + 1) = 5
y = 5(3x+1)

f^-1 = 5 / (3x+1)

Note. f^-1(x) means the inverse function for f(x). 
Note that f^-1(x) != 1/f(x).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Question. Do all functions have inverse functions? That is, for any
function that you might encounter, is there always a function that is
its inverse?
- No.

Try to find an example of a function that does not have an inverse 
function.
- (IMPORTANT. !function! means that for each x in domain, there is only
one corresponding y-value) => e.g. f(x^2) 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Key Fact 4. A function has an inverse function if and only if the graph
of f satisfies the forizontal line test (i.e. every horizontal line 
intersects the graph of y = f(x) in at most one point)





Definition. A function is one-to-one if it passes the horizontal line
test. Equivalently, a function is one-to-one if for any two different
x-values x1 and x2, f(x1) and f(x2) are different numbers. Sometimes,
this is said: f is one-to-one if, whenever f(x1) = f(x2), then x1=x2.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. (Tricky) Find p^-1(x), where p(x) = (x-2)^1/2 drawn on graph.
Graph p^-1(x) on the same axes as p(x).


For the function p(x) = (x-2)^1/2, what is: 
 the domain of p? 		 x >= 2, [2, +Inf)
 the range of p? 		 y >= 0, [0, +Inf)
 the domain of p^-1?     x >= 0, [0, +Inf)
 the range of p^-1?		 y >= 2, [2, +Inf)

Key Fact 5. For any inverible function f, the domain of f^-1(x) is 
the range of f(x) and the range of f^-1(x) is the domain of f(x).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Functions:

1) reverse the roles of y and x
2) the graph of y = f^-1(x) is the graph of y = f(x) reflected over the
line y = x
3) f o f^-1(x) = x
   f^-1 o f(x) = x
4) f(x) has an inverse fn if and only if the graph of y = f(x) satisfies
the horizontal line test
5) the domain of f(x) is the range of f^-1(x) and the range of f(x) is 
the domain of f^-1(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Angles and Their Measures

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Angles are commonly measured using either degrees or radians

For degrees
 > a full circle measures 360 deg
 > a half circle measures 180 deg
 	1/3 of circle measures 120 deg

For radians:

 > a full circle measures 2 Pi radians
 > a half circle measures 1 Pi radian
 	1/4 of circle measures 1/2 Pi radians

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Note. To convert between degrees and radians, it is handy to use the 
fact that 180 deg equals Pi radians.

Example. Conver -135deg to radians.
-135 deg * Pi radians / 180 deg = - 135/180*Pi radians

Example. Convert 5Pi/4 radians to degrees.
5Pi/4 * 180deg/Pi = 5*180/4 = 225deg

Example. Convert 7 radians to degrees.
7 radians * 180 deg / Pi radians = 1260 deg / Pi

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sometimes, angles are given in terms of degrees, minutes, and seconds,
as in 32deg17'25"

A minute is 1/60 degree. 60 minutes = 1 degree.

A second is 1/60 minute = 1/3600 degree.  3600 seconds = 1 degree.

Example. Convert 32deg17'25" to a decimal number of degrees.

32 deg + 17/60deg + 25/3600 deg = 32.2903 deg


Example. Convert 247.3486deg to degrees, minutes, and seconds.

247deg + 0.3486deg = 247 deg + 20.916' = 247deg + 20deg + 54.96" = 
= 247deg20'55"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Arclength and Areas of Sectors

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The circumference of a circle is given by the formula C = 2 * Pi * r

Example. A circular pool has a radius of 8 meters. Find the arclength
spanned by a central angle of 2.5 radians.

C = 2 Pi * 8m = 16Pi m

arclength = fraction of circle * circumference = 
= 2.5 rad / 2Pi rad * 2Pi * 8m = 2.5 * 8m = 10m.

The arclength is related to the angle it spans according to the formula.
arclength = (O / 2Pi) * (2Pi * r) = O * r radians  | O - Theta

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Area of a circle is given by the formula A = Pi * r^2

Example. Find the area of a sector of a circle of radius 10 meters, that
spans an angle of Pi/6 radians.

Area of circle = Pi(10m)^2 = 100*Pi m^2
Area of sector = fraction of circle * area of circle =
= (Pi/6 radians)/(2Pi radians) * 100 Pi m^2 = 26.18 m^2  


The area of a sector is related to the angle is spans according to the formula 

area of sector = (Theta {in radians} / 2Pi {radian in circle}) * Pi * r^2

area of sector = (Theta {in radians} / 2 ) * r^2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Linear and Radial Speed

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Consider a spinning wheel.

Definition. The angular speed is angle it goes through in a unit of time 
and has units of angle/time radius/sec or deg/min etc.

Definition. The linear speed is distance a point on rim of wheel travels
in a unit of the time ~> dist/time
and has units of m/sec, ft/min et.c

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. A ferris wheel with radius 20m is making 1 revolution every 2 minutes. What is its angular speed? The lieanr speed of a point on
its rim?

1 rev / 2 min = 1/2 rev/min

angular speed = 1/2 rev/min * 2Pi rad / 1 rev =
= Pi radians / minute

linear speed = (Pi radians / min) * (2Pi * 20m / 2Pi radians) = 
= 20 Pi m/min

The linear speed (v) is related to the angular speed (w (omega)) by 
the formula v = w (omega) * circumferece / 2Pi = w * (2Pi * r) / 2Pi = 
= w * r {omega * radius}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1:33:04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Right Angle Trigonometry

(sin, cos, tan, sec, csc, cot)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For a right triangle with sides a, b and c and angle Theta


	|\
	| \
  a |  \ c
	| T \
	|__/_\
	  b

sin Theta = opposite / hypotenuse  = a / c
cos Theta = adjacent / hypotenuse  = b / c
tan Theat = opposite / adjacent    = a / b 

SohCahToa

tan = sin / cos = (opp / hyp) / (adj / hyp) = (opp / hyp) * (hyp / adj)
= opp / adj = tan

sec Theta = 1 / cos = 1 / (adj / hyp) = hyp / adj = c / b
csc Theta = 1 / sin = 1 / (opp / hyp) = hyp / opp = c / a
cot Theta = 1 / tan = 1 / (opp / adj) = adj / opp = b / a

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Find the exact values of all six trig functions of angle Theta
in this right triangle.


	|\
	|_\
  a |T \ c=5
	|   \
	|____\
	  b=2

opposite of T = b = 2
adjacent to T = a = 21^1/2 = v21'
hypotenuse    = c = 5

a = (5^2 - 2^2)^1/2 = 21^1/2

sin Theta = opposite / hypotenuse  = b / c = 2 / 5
cos Theta = adjacent / hypotenuse  = a / c = v21' / 5
tan Theat = opposite / adjacent    = b / a = 2 / v21'

sec Theta = 1 / cos = 1 / (adj / hyp) = hyp / adj = c / a = 5 / v21'
csc Theta = 1 / sin = 1 / (opp / hyp) = hyp / opp = c / b = 5 / 2
cot Theta = 1 / tan = 1 / (opp / adj) = adj / opp = a / b = v21' / 2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. A kite is flying at an angle of elevation of 75deg, with 100m
of kite string let out. How high is the kite?

 kite	100m hypotenuse \
y |           o
  |  75deg/  -+-
  |_________  ^

x = ?
y = ?
c = 100
Theta = 75deg

sin = opp / hyp
sin 75deg = y / 100
y = 100m * sin75deg 
y = 96.59m

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sine and Cosine of Special Angles

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Without using a calcultaor, find sin(45deg) and cos(45deg) 
using a right triangle with hypotenuse 1.

opp^2 = hyp^2 - adj^2, opp = adj
opp^2 = 1 - opp^2
2*opp^2 = 1
opp^2 = 1/2
opp = adj = v1/2' = v1' / v2' = 1 / v2' * (v2' / (v2' * v2') ) = v2' / 2

sin(45deg) = opp / hyp = opp / 1 = opp = v1/2'
cos(45deg) = adj / hyp = adj / 1 = adj = opp = v1/2'

Example. Without using a calculator, find sin(45deg) and cos(45deg) 
using a right triangle with hypotenuse 5.

opp^2 = hyp^2 - adj^2, opp = adj
opp^2 = 1 - opp^2
2*opp^2 = 5
opp^2 = 5/2
opp = adj = v5/2' = 5*v2'/2

sin(45deg) = opp / hyp = opp / 1 = opp = (5*v2'/2) / 5 = v2'/2
cos(45deg) = adj / hyp = adj / 1 = adj = opp = (5*v2'/2) / 5 = v2'/2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Without using a calculator, find sin(30deg) and cos(30deg).

Angles a(30deg), b(60deg), c(90deg)
c (hypotenuse) = 1

mirror the triangle => all angles = 60deg & all edges = 1 =>
=> side opposite to 30deg = 1/2
sin(30deg) = 1/2 / 1  = 1/2

adj to 30deg side = v/ 1^2 - 1/2^2 ' = v3/4' = v3' * 1 /2 = v3'/2

cos(30deg) = v3'/2 / 1 = v3'/2

Example. Without using a calculator, find sin(60) and cos(60).

sin(60) = opp / hyp = cos(30) = v3'/2
cos(60) = adj / hyp = sin(30) = 1/2

To summarize:

------------- -------------- --------------- ---------------
 angle (deg)   angle in rad        cos             sin      
------------- -------------- --------------- ---------------
     30            Pi/6           v3'/2        v1'/2 (1/2)   
     45            Pi/4           v2'/2           v2'/2      
     60            Pi/3        v1'/2 (1/2)        v3'/2      
------------- -------------- --------------- ---------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Unit Circle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Note. Up to now we have defined sine, cosine, and tangent in terms of
right triangles. 

For example, to find sin(14deg) ... 
you can draw a right triangle with angle 14deg and calculate sin(14deg)
sin(14deg) = opp / hyp ... 

What goes wrong if we try to compute sin(120deg) using a right triangle?

This angle is > 90 deg. It means there is no way to complete this 
triangle to the right triangle.

Definition. The unit circle is a circle of radius 1.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the figure, a right triangle is drawn in the unit circle. It's top 
vertex has coordinates (a,b). In terms of a and b,

	> How long is the base of the triangle?
	> How long is its height?

Using the triangle definition of sine and cosine, what are sin and cos,
in terms of a and b?

(a,b) is the point of triangle on the circle

cos = a / 1 (x coord of a,b)  
sin = b / 1 (y coord of a,b) 
tan = b / a (y coord / x coord of a,b) 

Definition. For angles Theta that can't be part of a right triangle we
find the point on the unit circle at angle Theta and define

cos = x-coord sin = y-coord tan = y-coord / x-coord

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. For the angle phi (>90deg)

r = 1, (a,b) = (-0.3420, 0.9397)

sin(phi) = 0.9397
cos(phi) = -0.3420
tan(phi) = 0.9397 / -0.3420 = -0.36

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Properties of Trig Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Periodic Property: sin and cos are periodic with period 2Pi

cos(Theta+2Pi) = cos(Theta) = cos(Theta+360deg) 
cos(Theta-2Pi) = cos(Theta) = cos(Theta-360deg) 

sin(Theta+2Pi) = sin(Theta) = sin(Theta+360deg) 
sin(Theta-2Pi) = sin(Theta) = sin(Theta-360deg) 

Example. Find

1. cos(5Pi) = cos(Pi + 4Pi) = cos(Pi)

2. sin(-420deg) = sin(-4Pi-60deg) = sin(-60deg)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Even Odd Property:

cos - Even function
cos(-Theta) = cos(Theta)

sin - Odd function
sin(-Theta) = -sin(Theta)

Example. Determine if tan(Theta) is and even or odd function.
tan = sin(-Th) / cos(-Th) = -sin / cos = -tan

tan is odd

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pythagorean Property:

(cos(Theta))^2 + (sin(Theta))^2 = 1

cos^2(Theta) + sin^2(Theta) = 1

Example. If sin(t) = -2/7, and t is angle that lies in quadrant III,
find cos(t).

cos^2(t) + sin^2(t) = 1

cos^2(t) + (-2/7)^2 = 1

cos^2(t) = 1 - 44/49 = 45/49

cos(t) = +- (45/49)^1/2 = +- v45' / 7

cos(t) = -v45' / 7

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2:04:39
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/