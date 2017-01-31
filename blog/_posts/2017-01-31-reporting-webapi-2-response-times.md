---
layout: post
author: Toby Foord
published: false
title: Reporting WebAPI 2 Response Times
metatitle: Reporting WebAPI 2 Response Times
metadesc: >-
  Quickly and unobtrusively extend your WebAPI to expose response times for all
  endpoints.
---
Upon my first forray into WebAPI 2 I immediately longed for visiblity of just how long a request had taken to execute.

Traditionally I would add a node to my xml response such as `<metrics elapsed="0.0580"/>`. This however had a significant pitfall in that its addition was applied to each response manually by wrapping the `XMLWriter` and any business logic with a calculated timespan. All in all making for messy code and increasing the code burden/technical debt for every new endpoint exposed.

With the beauty of WebAPIs simplicity in serializing objects so cleanly, the idea of muddying the models with this logic was really quite unappealing. Upon the discovery that you are able to apply filters to your response through `WebAPIConfig` it was time for a bit of digging.

In the end the solution is really quite pretty. I'm a vb developer primarily so I'll make no apologies for the code samples below. For those who of the C# persuasion [Telerik's converter](converter.telerik.com/) may ease your pain.

Firstly lets create our filter. Extending `ActionFilterAttribute` we're able to create hooks before and after our code executes.

```
Public Class StopwatchHeaderFilter
    Inherits Filters.ActionFilterAttribute
    
    Public Overrides Sub OnActionExecuting(actionContext As HttpActionContext)
    	'...
    End Sub
    
    Public Overrides Sub OnActionExecuted(actionExecutedContext As HttpActionExecutedContext)
    	'...
    End Sub
End Class
```

Now I could probably almost leave you there, the manner in which you calculate the duration of the request could take several forms but I've become quite fond of `System.Diagnostics.Stopwatch`:

```
Public Overrides Sub OnActionExecuting(actionContext As HttpActionContext)
	actionContext.Request.Properties.Add("stopwatch", Stopwatch.StartNew())
End Sub

Public Overrides Sub OnActionExecuted(actionExecutedContext As HttpActionExecutedContext)
	Dim myStopwatch As Stopwatch = actionExecutedContext.Request.Properties("stopwatch")
End Sub
```


In my first iteration of this I had chosen to define my stopwatch as a private property of `StopwatchHeaderFilter`. I'll save you the experiment, its not a great plan. I'm now aware, following furrowed brows, that action filters are shared across multiple actions and as such the resulting period can accumulate across them. To eliminate concurrency concerns it is safest to store the instance within the context of the request.

So lets do something with this new found data. Rather than exposing this value within the body of the response, as I was previously inclined to do, I'd much rather it be presented within the headers of the response. For times that I want to use this value its easily accessible, and for the times I don't its hidden nicely from view.

```
Public Overrides Sub OnActionExecuted(actionExecutedContext As HttpActionExecutedContext)
	Dim myStopwatch As Stopwatch = actionExecutedContext.Request.Properties("stopwatch")
    actionExecutedContext.Response.Headers.Add("X-Stopwatch", stopwatch.Elapsed.ToString)
End Sub
```
* As a side note, I use the `X-` prefix to custom headers. I like it and I've used it for years (back when it was best practice), but apparently its [no longer recommended](http://stackoverflow.com/questions/3561381/custom-http-headers-naming-conventions) if it doesn't appeal, chop it out!

And we're done. All of my responses now hold this little bit of unobtrusive meta data, and I can't count how many times I've used it in debugging & reporting.




    


