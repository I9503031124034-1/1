// A       10
// B       0
// C       110
// D       111
var
codes
= 
[
{
symbol
: 
'A'
,
code
: 
'10'
}
,
{
symbol
: 
'B'
,
code
: 
'0'
}
,
{
symbol
: 
'C'
,
code
: 
'110'
}
,
{
symbol
: 
'D'
,
code
: 
'111'
}
,
]
code 
= 
0
bl_count 
= 
[

]
next_code 
= 
[

]
bl_count
[
0
]
= 
0
 
(
bits 
= 
1
; 
bits 
<= 
MAX_BITS
; 
bits 
= 
bits 
+ 
1
) 
{
code 
= 
(
code 
+ 
bl_count
[
bits
-
1
]
) 
<< 
1
next_code
[
bits
]
=
code
}
