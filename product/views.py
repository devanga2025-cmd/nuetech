

# Create your views here.
from django.shortcuts import render
from .models import ProductCard

def products_view(request):
    # Fetch all products from the database
    products = ProductCard.objects.all()
    
    context = {
        'products': products,
    }
    return render(request, 'product/product.html', context)