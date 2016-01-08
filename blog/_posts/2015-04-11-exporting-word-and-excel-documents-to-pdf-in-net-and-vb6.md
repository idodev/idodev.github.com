---
published: true
title: "Exporting Word and Excel documents to PDF in .NET (and VB6!)"
layout: post
author: Toby Foord
---

Obscure and probably only of interest to a very specific few, this was a friggin' revelation that I kind of tripped over yesterday.

Working with a legacy on-prem application where Word and Excel documents are being generated, we've been using network PDF printers to try to hack-automate PDF generation and attachment to emails. The problem with this has been lack of portability in the code base (it requires additional config on every users machine) and nigh-on impossible diagnosis when it all just doesnt play nice!

So, when I realised that Office can natively export to PDF, my heart skipped a beat. Office 2007 was the first to be able to do so, albeit requiring the installation of an addin. From 2010 support has been hard baked into Office's core and with that has been exposed, in the COM visible assembly `Microsoft.Office.Interop.Word.dll`, to happy go lucky .NET developers like me. Just a shame it's taken me 5(?!) years to spot it.

The MSDN articles provide a pretty thorough description (go figure!). Note that the methods exposed by the interop differ between Word & Excel.

##EXCEL

```
Sub ExportAsFixedFormat ( _
	Type As XlFixedFormatType, _
	Filename As Object, _
	Quality As Object, _
	IncludeDocProperties As Object, _
	IgnorePrintAreas As Object, _
	From As Object, _
	To As Object, _
	OpenAfterPublish As Object, _
	FixedFormatExtClassPtr As Object _
)
```

**Source:** [MSDN](https://msdn.microsoft.com/en-us/library/microsoft.office.tools.excel.workbook.exportasfixedformat.aspx)

##WORD

```
Sub ExportAsFixedFormat ( _
    OutputFileName As String, _
    ExportFormat As WdExportFormat, _
    OpenAfterExport As Boolean, _
    OptimizeFor As WdExportOptimizeFor, _
    Range As WdExportRange, _
    From As Integer, _
    To As Integer, _
    Item As WdExportItem, _
    IncludeDocProps As Boolean, _
    KeepIRM As Boolean, _
    CreateBookmarks As WdExportCreateBookmarks, _
    DocStructureTags As Boolean, _
    BitmapMissingFonts As Boolean, _
    UseISO19005_1 As Boolean, _
    ByRef FixedFormatExtClassPtr As Object _
)
```

**Source:** [MSDN](https://msdn.microsoft.com/en-us/library/microsoft.office.tools.word.document.exportasfixedformat.aspx)

I had planned to write up so demo code to demonstrate this, but, if did anything but point you to [Code Projects article](http://www.codeproject.com/Tips/592957/Converting-Document-Word-Excel), I'd be doing you a disservice!