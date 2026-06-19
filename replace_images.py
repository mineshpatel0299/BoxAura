import os

mapping = {
    "/images/wedding_box_1.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
    "/images/wedding_box_2.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg",
    "/images/wedding_box_3.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.09_1_qzulax.jpg",
    "/images/wedding_box_4.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861841/ChatGPT_Image_Jun_19_2026_01_46_12_PM_1_1_egihmx.png",
    "/images/wedding_box_5.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861840/ChatGPT_Image_Jun_19_2026_01_43_40_PM_zfkduw.png",
    "/images/wedding_box_6.png": "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg"
}

dir_path = "/Users/edigitify/Desktop/Edigitify Workspace/boxaura/src/app/components/home"

for root, _, files in os.walk(dir_path):
    for f in files:
        if f.endswith(".tsx"):
            file_path = os.path.join(root, f)
            with open(file_path, "r") as file:
                content = file.read()
            
            new_content = content
            for old, new in mapping.items():
                new_content = new_content.replace(old, new)
            
            if content != new_content:
                with open(file_path, "w") as file:
                    file.write(new_content)
                print(f"Updated {f}")
