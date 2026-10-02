from sqlalchemy import Column, Integer, String, Text, Foreignkey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm import func

from app.db.base import Base

class Tourist(Base):
    _tablename_ = "tourists"

    # Định nghĩa các thuộc tính

    # Lưu đường dẫn url

    # Liên kết khóa ngoại

    # Mối liên kết