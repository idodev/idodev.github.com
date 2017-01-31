---
published: true
layout: post
date: "2013-07-02"
author: Toby Foord
title: Iterating through an Enum in VB.NET
slug: "iterating-through-an-enum-in-vb-dot-net"
date: 2013-07-02
categories: blog vb dotnet
---

Just a quick one, while I remember. How to loop (for each) through all values in an enum in VB.NET

For demonstration purposes, lets say we have an `Enum` of image sizes that we need to look through.

###The Enum
```
Public Enum ImageSizeEnum
    Thumb = 0
    Small = 1
    Medium = 2
    Large = 3
Enum
```
###Iterating the Enum
```
Dim EnumSizeValues As Array = System.[Enum].GetValues(GetType(ImageSizeEnum))
For Each Size As ImageSizeEnum In EnumSizeValues
    'Do something clever with Size
    Console.WriteLine("Size: {0}", Size)
Next
```


Awesome! I hit a need to do this and figured it would be a real pain. In the end this was a fairly elegant and simple solution.

