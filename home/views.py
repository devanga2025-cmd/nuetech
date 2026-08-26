
# Create your views here.
from django.shortcuts import render
from .models import SolutionCard, NewsUpdate

def home_view(request):
    """
    Fetches the solution cards and news updates from the database 
    and passes them to the HTML template.
    """
    
    # Fetch all Solution Cards from the Admin Panel
    # You can add .order_by('-id') if you want the newest ones first
    solutions = SolutionCard.objects.all()

    # Fetch all News Updates from the Admin Panel
    # Ordered by date descending (newest first)
    news_updates = NewsUpdate.objects.all().order_by('-date')

    # Create a dictionary to send data to the HTML
    context = {
        'solutions': solutions,
        'news_updates': news_updates,
    }

    # Render the HTML template with the data
    return render(request, 'home/home.html', context)



