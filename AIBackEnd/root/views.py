from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    """View for homepage"""
    print("Working!!");
    return HttpResponse("Budget Buddy - A Personal Budget Tracker V.0.0.1")