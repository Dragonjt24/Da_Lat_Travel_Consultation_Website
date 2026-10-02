from sqlalchemy import Column, Integer, String, Text, Foreignkey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.orm import func

from app.db.base import Base

class Location(Base):
    _tablename_ = "locations"

    # Định nghĩa các thuộc tính
    id = Column(Integer, primary_key = True, index = True)
    name = Column(String(255), nullable = False, index = True)
    address = Column(String(255), nullable = False)
    description = Column(Text, nullable = True)
    price = Column(Numeric(12, 2), nullable = True)
    open_time = Column(DateTime, nullable = True)
    close_time = Column(DateTime, nullable = True)
    latitude = Column(Numeric(10, 7), nullable=True,)
    longitude = Column(Numeric(10, 7), nullable=True,)
    review_count = Column(Integer, nullable=True, default=0,)

    # Lưu đường dẫn url
    background_url = Column(String(255), nullable=True) #save path, example: "static/covers/xxx.jpg"

    # Liên kết khóa ngoại
    provider_id = Column(Integer, Foreignkey("provider.id", ondelete="RESTRICT"), nullable=False)

    # Tạo createdAt và updateAt
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    update_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Mối liên kết
    # 1 - 1
    locations = relationship("LocationDetail", back_populates="location")
    # 1 - N
    locations = relationship("LocationPhoto", back_populates="location")
    locations = relationship("Review", back_populates="location")
    locations = relationship("PlanDetail", back_populates="location")
    locations = relationship("AIRecommendation", back_populates="location")
    # N - N
    locations = relationship("Category", back_populates="location")
    # N - 1
    locations = relationship("Provider", back_populates="location")
    