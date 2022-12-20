from pydantic import BaseModel, Field
import datetime
from typing import List


class Note(BaseModel):
    title: str
    description: str
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        orm_mode: True


class ShowNote(Note):
    title: str
    description: str
    created_at: datetime.datetime
    updated_at: datetime.datetime


class LeadCollectedModel(BaseModel):
    email: str = Field(default="askquestion@app.soberpal.com")
