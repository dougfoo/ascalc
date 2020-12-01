from django.shortcuts import render
from django.template import loader
from rest_framework import viewsets
from rest_framework import permissions
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Bundle, Resource, Project
from .serializers import BundleSerializer, ResourceSerializer, ProjectSerializer, PlistSerializer

def index(request):
    latest = Bundle.objects.all()[:5]
    context = {'latest_bundle_list': latest }
    return render(request, 'bundles/index.html', context)

@csrf_exempt
def plist(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = PlistSerializer(projects, many=True)
        sdata = serializer.data
        print(projects)
        print(type(projects))
        jr = JsonResponse(sdata, safe=False)
        return jr

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