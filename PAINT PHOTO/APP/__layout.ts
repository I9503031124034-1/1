import
{
Slot
}
from 
'expo-router'
var
SLOT
=
Slot
import 
{
createElement
}
from
'react'
var
ELEMENT
=
createElement
import
{
StatusBar
,
View
}
from 
'react-native'
var
BARSTATUSHEIGHT
=
StatusBar
.
currentHeight
,
VIEW
=
View
export 
default
(

) => 
{
return ELEMENT
(
VIEW
,
{
style
:
{
height
: 
'100%'
,
margin
:
0
,

: 
0
,
position
: 
'relative'
,
width
: 
'100%'
}
}
,
ELEMENT
(
VIEW
,
{
style
:
{
width
:
'100%'
,
height
: 
'100%'
,
margin
:
0
,
paddingTop
:
BARSTATUSHEIGHT
}
}
,
ELEMENT
(
SLOT
)
)
)
}
