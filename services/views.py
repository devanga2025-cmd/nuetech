from django.shortcuts import render

from .models import ComprehensiveService


def services_view(request):
    services = ComprehensiveService.objects.all()
    return render(request, 'services/services.html', {'services': services})
