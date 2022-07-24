import logging
from rest_framework import status
from rest_framework.decorators import renderer_classes, api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from .classifierModel import setup_docs, print_frequency_dist, train_classifier, classify
from .models import AdvolineDB

# # A variable that holds the id of the row in the db
# id1 = 1


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def classifyhandler(request):
    logger = logging.getLogger(__name__)
    logger.warning('entered into classifyhandler()')
    story = request.GET.get('userStory', '')
    logger.warning('recieve user story request to story variable')
    docs = setup_docs()
    logger.warning('finished docs = setup_docs()')
    train_classifier(docs)
    logger.warning('finished train_classifier(docs)')
    lawyerType = classify(story)
    logger.warning('finished classify(story)')
    lawyerType = lawyerType.replace("_", " ")
    logger.warning('finished lawyerType.replace("_", " ")')

    Data = AdvolineDB(story=story, LawyerType=lawyerType)
    Data.save()
    logger.warning('finished Data.save()')

    return Response(lawyerType, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def nameAndEmailhandler(request):
    name = request.GET.get('name', '')
    email = request.GET.get('email', '')
    Data = AdvolineDB.objects.get(pk=id1)
    Data.name = name
    Data.email = email
    Data.save()

    return Response(name, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def phonenumberhandler(request):
    user_phone_number = request.GET.get('phoneNumber', '')
    Data = AdvolineDB.objects.get(pk=id1)
    Data.user_phone_number = user_phone_number
    Data.save()

    return Response(user_phone_number, status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def mainLegalhandler(request):
    lawyerType = request.GET.get('mainLegalField', '')
    Data = AdvolineDB.objects.get(pk=id1)
    Data.LawyerType = lawyerType
    Data.save()

    return Response(False, status=status.HTTP_200_OK)


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def filehandler1(request):
    title = request.POST.get('title', '')
    image = request.FILES['image']
    Data = AdvolineDB.objects.get(pk=id1)
    Data.image1 = image
    Data.title1 = title
    Data.save()

    return Response(False, status=status.HTTP_200_OK)


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def filehandler2(request):
    title = request.POST.get('title', '')
    image = request.FILES['image']
    Data = AdvolineDB.objects.get(pk=id1)
    Data.image2 = image
    Data.title2 = title
    Data.save()

    return Response(False, status=status.HTTP_200_OK)


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def filehandler3(request):
    title = request.POST.get('title', '')
    user_comments = request.POST.get('usercomment', '')
    image = request.FILES['image']
    Data = AdvolineDB.objects.get(pk=id1)
    Data.image3 = image
    Data.title3 = title
    Data.user_comments = user_comments
    Data.save()

    return Response(False, status=status.HTTP_200_OK)
