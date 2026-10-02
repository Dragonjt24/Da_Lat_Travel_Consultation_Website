from sqlalchemy import Column, Integer, String, Text, Foreignkey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm import func

from app.db.base import Base

class Account(Base):
    _tablename_ = "accounts"

    # Định nghĩa các thuộc tính

    # Lưu đường dẫn url

    # Liên kết khóa ngoại

    # Tạo createdAt và updateAt
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    update_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Mối liên kết