from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'bundles', views.BundleViewSet)
router.register(r'resources', views.ResourceViewSet)

urlpatterns = [
    # ex: /calcapp/
    path('', views.index, name='index'),
    # ex: /calcapp/bundle_name/bundle/
    path('<bundle_name>/bundle/', views.bundle, name='bundle'),
    # ex: /calcapp/resource_name/resource/
    path('<resource_name>/resource/', views.resource, name='resource'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

