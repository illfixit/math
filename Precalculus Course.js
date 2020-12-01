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


*/