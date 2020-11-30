from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from rest_framework import permissions
from .models import Bundle, Resource, Project
from .serializers import BundleSerializer, ResourceSerializer, ProjectSerializer


# def index(request):
#     return HttpResponse("Hello, world. You're at the calcapp index.")

# # def bundle(request, bundle_name):
# #     return HttpResponse("You're looking at bundle %s." % bundle_name)

# # def resource(request, resource_name):
# #     response = "You're looking at the resource %s."
# #     return HttpResponse(response % resource_name)

def index(request):
    latest = Bundle.objects.all()[:5]
    context = {'latest_bundle_list': latest }
    return render(request, 'bundles/index.html', context)

class BundleViewSet(viewsets.ModelViewSet):
    queryset = Bundle.objects.all()
    serializer_class = BundleSerializer
    lookup_field = 'name'
#    permission_classes = [permissions.IsAuthenticated]

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
#    lookup_field = 'role'   # does'nt work if using hyperlinked
#    permission_classes = [permissions.IsAuthenticated]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'name'   # does'nt work if using hyperlinked
#    permission_classes = [permissions.IsAuthenticated]