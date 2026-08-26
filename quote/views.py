from django.shortcuts import render


def quote_view(request):
    return render(request, 'quote/quote.html')
