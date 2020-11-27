from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Bundle, Resource


# def index(request):
#     return HttpResponse("Hello, world. You're at the calcapp index.")

def bundle(request, bundle_name):
    return HttpResponse("You're looking at bundle %s." % bundle_name)

def resource(request, resource_name):
    response = "You're looking at the resource %s."
    return HttpResponse(response % resource_name)

def index(request):
    latest = Bundle.objects.all()[:5]
    context = {'latest_bundle_list': latest }
    return render(request, 'bundles/index.html', context)
