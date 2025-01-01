padding
![alt text](image.png)
---
border
![alt text](image-1.png)
![alt text](image-2.png)
---
margin 
![alt text](image-3.png)
![alt text](image-4.png)

---

box sizing 

muốn tổng kích thước không bị ảnh hưởng bởi padding , border ... thì dùng box sizing 
![alt text](image-5.png)
như ảnh ở dưới thì dù padding 16px thì tổng vẫn 100px do box-sizing :border-box 
nhưng nếu để to quá thì vẫn bị tràn ra 
còn kiểu content-box thì giống mặc định , unset thì hủy đi border-box ,..
![alt text](image-6.png)
---
background-clip 

![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)

---
background-image
![alt text](image-10.png)
chỉ 1 ảnh không lặp 
![alt text](image-11.png)
![alt text](image-12.png)
còn y là dọc 
![alt text](image-13.png)
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
muốn ảnh mà có màu xen kẽ vô thì dùng rgba trong đó rgb là red green blue , a là từ 0 - 1 độ chỉnh trong suốt 
![alt text](image-17.png)
ảnh mẫu dùng background-size 100% với repeat mà trong đẹp thì 
![alt text](image-18.png)
![alt text](image-19.png)
---
background-size 
![alt text](image-20.png)
lấy đối đa theo chiều dài hoặc dọc sao cho ảnh không bị cắt bớt trong view màn hình  bới so với chiều thực tế 
![alt text](image-21.png)
chấp nhật bị cắt bớt ảnh dùng cover , lấy ảnh lấp toàn màn hình 
![alt text](image-22.png)

---
background-origin 
giống background-clip nhưng áp dụng lấy ảnh đổ vô  thay vì màu nền 
![alt text](image-23.png)
![alt text](image-24.png)

---
background-position 

mặc định là center

![alt text](image-25.png)
![alt text](image-26.png)
![alt text](image-27.png)
![alt text](image-28.png)
![alt text](image-29.png)
![alt text](image-30.png)
![alt text](image-31.png)
---
shortcut image 

màu - ảnh - lặp - vị trí / size (contain , cover )
![alt text](image-32.png)

---
css function 
![alt text](image-33.png)
![alt text](image-34.png)
![alt text](image-35.png)

---
pseudo classes  : lớp giả 
![alt text](image-36.png)
---
pseudo elements 
![alt text](image-37.png)
![alt text](image-38.png)
![alt text](image-39.png)
![alt text](image-40.png)
![alt text](image-41.png)

---
 # position: đi với top left right bottom 


- relative : lấy bản thân làm tọa độ 
![alt text](image-42.png)
so với margin lấy góc trên trái màn hình làm tọa độ  ![alt text](image-43.png)


- absolute : lấy thằng cha làm tọa độ 


cha gần nhất có thuộc tính position thì con tự xem nó là cha 
code : 
![alt text](image-45.png)
ví dụ :
![alt text](image-44.png)
![alt text](image-46.png)
![alt text](image-47.png)
![alt text](image-48.png)
![alt text](image-49.png)

- fixed : lấy nguyên view trình duyệt làm tọa độ , và nó cố định luôn luôn  ở đó 

![alt text](image-50.png)
![alt text](image-51.png)


- sticky: 
![alt text](image-52.png)

---
# flexbox 
![alt text](image-54.png)
![alt text](image-53.png)
