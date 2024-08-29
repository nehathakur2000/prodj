from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def index(request):
    template=loader.get_template("index.html")
    return HttpResponse(template.render())


def about(request):
    template=loader.get_template("About.html")
    return HttpResponse(template.render())

def chefs(request):
    template=loader.get_template("Chefs.html")
    return HttpResponse(template.render())

def contact(request):
    template=loader.get_template("Contact.html")
    return HttpResponse(template.render())

def events(request):
    template=loader.get_template("Events.html")
    return HttpResponse(template.render())

def gallery(request):
    template=loader.get_template("Gallery.html")
    return HttpResponse(template.render())

def menu(request):
    template=loader.get_template("Menu.html")
    return HttpResponse(template.render())

def specials(request):
    template=loader.get_template("Specials.html")
    return HttpResponse(template.render())

def form(request):
    template=loader.get_template("form.html")
    return HttpResponse(template.render())