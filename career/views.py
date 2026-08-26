
# Create your views here.
from django.shortcuts import render
from .models import JobOpportunity

def careers_view(request):
    # Fetch all jobs from the database
    jobs = JobOpportunity.objects.all()
    
    context = {
        'jobs': jobs,
    }
    return render(request, 'career/career.html', context)