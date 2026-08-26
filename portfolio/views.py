from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import FounderVision, FeaturedProject

def portfolio_view(request):
    # Fetching the Founder's Vision (Assuming there's only one, get the first)
    founder_vision = FounderVision.objects.first()
    
    # Fetching all Featured Projects
    featured_projects = FeaturedProject.objects.all()
    
    context = {
        'founder_vision': founder_vision,
        'featured_projects': featured_projects,
    }
    return render(request, 'portfolio/portfolio.html', context)