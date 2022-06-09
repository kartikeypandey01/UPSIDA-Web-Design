from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.html')
def resource(request):
    return render(request,'resources.html')
def about(request):
    return render(request,'about.html')
def project(request):
    return render(request,'projects.html')
def eservice(request):
    return render(request,'eservice.html')
def policies(request):
    return render(request,'policies.html')
def login(request):
    return render(request,'login.html')