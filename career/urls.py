from django.urls import path

from .views import careers_view

urlpatterns = [
    path('', careers_view, name='career'),
]
