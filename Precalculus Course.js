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

Graphs of Sine and Cosine

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The graph of y = cos(x) is the same as the graph of y=sin(x) shifted
horizontally by cos(x) = sin(x+Pi/2). sin(x) = cos(x-Pi/2)

Domain (-Inf, +Inf)
Range [-1, 1]
Even (cos) / odd (sin)
Abs max and min values (1, -1)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Midline is the horizontal line halfway in between max & min points.
In this case midlien of cos(x) and sin(x) is y = 0 (x-axis)

Amlitude is the vertical distance between a max point and the midline.
Amplitude of cos(x) and sin(x) = 1

Period is the horizontal length of the smallest repeating unit. 
Period of cos(x) and sin(x) = 2Pi
cos(x+2Pi) = cos(x)
sin(x+2Pi) = sin(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Graphs of Sinusoidal Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function         middle   amplitude   period
y = sin(x)       y = 0       1         2*Pi
y = 3sin(2x)     y = 0       3      1/2 * 2*Pi = Pi
y = 3sin(2x)+1   y = 1       3          Pi

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function y = 3sin(2(x-Pi/4))

y = 3sin(2x)
f(x) = 3sin(2x)
g(x) = f(x-Pi/4)
Shift graph of x to the right by Pi/4
 
function y = 3sin(2(x-Pi/4))-1

function               middle amplitude   period       horiz shift
y = sin(x)             y = 0     1         2*Pi
y = 3sin(2(x-Pi/4))-1  y =-1     3      1/2*2Pi = Pi  right by Pi/4

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Summary							    [y=3sin(2(x-Pi/4))-1]
For the graphs of y=Acos(Bx-C)+D and y=Asin(Bx-C)+d with B positive:
midline 							[y=3sin(2x-Pi/2)-1]
> y = D
amplitude
> A  (or more prec. abs(A))
period
> 1/b*2Pi -> 2Pi/B
horizontal shift
> first step is to convert y=Acos(Bx-C)+D to y=Acos(B(x-C/B))+D
> then the horizontal shift is C/B

y=1/3cos(1/2x+3)-5 => y=1/3cos(1/2(x+6))-5
middle: y=-5 ampl: 1/3 period 2Pi/(1/2)=4Pi
horiz shift: 6 units left 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Graphs of Tan, Sec, Cot, Csc

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. What is the slope of the line at angle Theta ... tan(Theta)

 / Theta inside a circle!
/_\_

> slope is the rise over the run. rise = sin(Theta), run = cos(Theta)
> slope = rise / run = sin / cos = tan(Theta)

When the angle is zero, the slope is 0
As the angle increases toward Pi/2, the slope goes to +Infinity
As the angle goes from zero towards -Pi/2, the slope goes to -Inf
At exactly Pi/2 and -Pi/2, the slope is undefined

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

y = tan(x) ~ 5 cubic like graphs from (-5/2Pi; 5/2Pi)

x-intercepts: ...-2Pi, -Pi, 0, Pi, 2Pi... Pi*k, k is an integer
y = tan(x) = sin(x)/cos(x) => y = 0 when sin(x) is 0 at -2Pi,-Pi,0 etc.

vertical asymptotes: ...-3Pi/2, -Pi/2, Pi/2, 3Pi/2..., 
k*Pi/2, where k is an odd integer (where cos(x)=0)

domain: everything except vert assymptotes
{x | x != Pi/2*k for k odd integer}

range (-Inf, +Inf)

period: Pi

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sketch a touch graph of y = sec(x) from x = 0 to x = 2Pi
y=sec(x)=1/cos(x) is mirrored over both y=-1 and y=1 and touches
y=cos(x) in its local minimums and maximums

x-intercepts: no

vertical asymptotes: Pi/2*k where k is an odd integer (where cos(x) = 0)

domain: {x | x != Pi/2*k for k odd integer}

range: (-Inf, -1] u [1; +Inf]

period: 2Pi

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2:30:10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Graphs of Tan, Sec, Cot, Csc

(related to graphs of y=cos(x) and y=sin(x))

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

y = csc(x) = 1/sin(x)
y = 2csc(Pi*x+Pi/2) + 1

    				  1 - shift up by 1
    		  Pi/2 indices the horiz. shift but NOT by Pi/2 (dep on x)
		 Pi - shrinks horizontally by 1/Pi 
    2 - vertical shift by 2

period = 2Pi/Pi = 2

y = 2csc(Pi(x+1/2))+1
			  1/2 - horizontal shift by 1/2 to the left

Vertical asymptote
y = 2csc(Pi(x+1/2))+1
csc = 1/sin
csc(Pi(x+1/2)) doesn't exist when sin(Pi(x+1/2)) = 0
i.e when Pi(x+1/2) = k*Pi   | /Pi
			x+1/2  = k
<=> x = k - 1/2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. Find the equation of this graph... :)

Looks like a tan(x)
but it has period of -3;1 -> period = 4
looks more like y = tan(Bx), where
Pi/B = 4 => B = Pi/4

Maybe y=tan(Pi/4 * (x+1)) + 1

The graph intersect y in 2, so maybe
y=A*tan(Pi/4*(x + 1)) + 1
plug in the point (0,2)

2 = A*tan(Pi/4(0+1))+1
2 = A*(1)+1
A = 1

so the function is y = tan( Pi/4 * (x+1) ) + 1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For the function y = A*tan(Bx-C)+D, how do the numbers A,B,C, and D
affect the graph? (Assume B>0) Original period of tan, cot = Pi.

A - vertical stretch

B - changes the period from Pi to Pi/B

C - we need to rewrite f to y = A*tan(B(x-C))+D -> C/B - phase shift
    right by C/B

D - shifts vertically by D

For the function y = A*sec(Bx-C)+D, how do the numbers A,B,C, and D
affect the graph? (Assume B>0)

y = A*sec(Bx-C)+D or y = A*csc(Bx-C)+D, period of sec, csc is 2Pi

B changes the period from 2Pi to 2Pi/B

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Trig Functions

sin^-1(x)
cos^-1(x)
tan^-1(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Sine Function (arcsin)

Graph... :) arcsin(x) is flipped over y = x but fails vertical test
so it is limited

Restricted sin(x) has Domain: [-Pi/2;Pi/2] Range: [-1,1]

arcsin(x) has Domain:[-1,1] Range: [-Pi/2;Pi/2]

arcsin(x) is the angle between -Pi/2 and Pi/2 whose sine is x

y = arcsin(x) means: x = sin(y), -Pi/2 <= y <= Pi/2

Alternative Notation: sin^-1(x) means arcsin(x)

Warning: sin^-1(x) != csc(x) or 1/sin(x)
		 sin^-1(x) = arcsin(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Cosine Function (arccos)

Graph... :) arccos(x) is flipped over y = x but fails vertical test
so it is limited

Restricted cos(x) has Domain: [0;Pi] Range: [-1,1]

arccos(x) has Domain:[-1,1] Range: [0;Pi]

arccos(x) is the angle between 0 and Pi whose cosine is x

y = arccos(x) means: x = cos(y), 0 <= y <= Pi

Alternative Notation: cos^-1(x) means arccos(x)

Warning: cos^-1(x) != sec(x) or 1/cos(x)
		 cos^-1(x) = arccos(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inverse Tangent Function (arctan)

Graph... :) arctan(x) is flipped over y = x but fails vertical test
so it has very limited range (y-values)

Restricted tan(x) has Domain: [-Pi/2;Pi/2] Range: [-Inf,+Inf]

arctan(x) has Domain: [-Inf,+Inf] Range: [-Pi/2;Pi/2]

arctan(x) is the angle between -Pi/2 and Pi/2 whose tan is x

y = arctan(x) means: x = tan(y), -Pi/2 <= y <= Pi/2

Alternative Notation: tan^-1(x) means arctan(x)

Warning: tan^-1(x) != cot(x) or 1/tan(x)
		 tan^-1(x) = arctan(x)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solving Basic Trig Equations

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. For the equation 2 cos(x) + 1 = 0

(a) Find the solutions in the interval [0, 2Pi).

2cos(x)=-1
cos(x)=-1/2

x is 2Pi/3 and 4Pi/3

(b) Give a general formula for All solutions ( not hust those in the
interval [0,2Pi) ) 

2Pi/3 + 2Pi (+4Pi etc.) and 4Pi/3 + 2Pi (+4Pi etc.)
or 
2Pi/3 + 2Pi*k and 4Pi/3 + 2Pi*k for k any integer

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. For the equation 2tan(x) = v3' - tan(x)

(a) Find the solutions in the interval [0, 2Pi)

3*tan(x) = v3'
tan(x) = v3'/3

tan(x)=sin(x)/cos(x) = v3'/3

tan(Pi/6) = sin(Pi/6)/cos(Pi/6) = 1/2 / v'3/2 = 1/3 * v3'/v3' = v3'/3




(b) Give a general formula for ALL solutions
tan(Pi/3) = v3' != v3'/3
tan(4Pi/3) = v3' != v3'/3

tan(7Pi/6) = v3'/3

=> x = Pi/6 + 2Pi*k, x = 7Pi/6 + 2Pi*k, for k any integer
and x = Pi/6 + Pi*k, for k any integer

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solving Basic Trig Equations

1) isolating sin(or tan or cos)

2) using unit circle to find principal solutions (between 0 & 2Pi)

3) adding multiples of 2Pi to find all solutions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solving Trig Equations that Require a Calculator

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Example. For the equation 2cos(t) = 1 - cos(t)

(a) Find all solutions in the interval [0, 2Pi]

3*cos(t) = 1
cos(t) = 1/3 (has many solutions)

arccos(cos(1/3)) = arccos(1/3)
t = arccos(1/3) = 1.2310 unlike cos(t)=1/3 has only 1 solution that
lies between angles 0 and Pi 

The other solution in [0; 2Pi) is given by 2Pi-1.2310 = 5.0522 rad
x =1.2310rad, 5.0522rad
We found the second solution by 2Pi - (first solution)

(b) Find all solutions.
x = 1.2310 + 2Pi*k, 5.0522 + 2Pi*k

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3:00:07
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/