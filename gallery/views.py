from django.shortcuts import render

from .models import FeaturedVideo, LatestNews, MediaGallery


def gallery_view(request):
    latest_news = LatestNews.objects.all().order_by('-date')
    gallery_images = list(MediaGallery.objects.all())
    gallery_main = next((img for img in gallery_images if not img.is_secondary), None)
    gallery_secondary = [img for img in gallery_images if img.is_secondary]
    featured_videos = FeaturedVideo.objects.all()

    context = {
        'latest_news': latest_news,
        'gallery_main': gallery_main,
        'gallery_secondary': gallery_secondary,
        'featured_videos': featured_videos,
    }
    return render(request, 'gallery/gallery.html', context)
