from fastapi.routing import APIRouter

# from api.system.views import router as system_router
from api.auth.views import router as auth_router
from api.communication.views import router as communication_router
from api.contact.views import router as contact_router
from api.emotions.views import router as emotions_router
from api.example.views import router as example_router
from api.progress.views import router as progress_router
from api.web_sockets.router import router as web_socket_router


api_router = APIRouter()
# api_router.include_router(system_router, prefix="/system", tags=["system"])
api_router.include_router(example_router, prefix="/example", tags=["example"])
# api_router.include_router(progress_router, prefix="/progress", tags=["Progress"])
api_router.include_router(emotions_router,prefix="/emotion", tags=["emotion"])
