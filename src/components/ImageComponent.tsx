const Image1: string = "https://picsum.photos/500/500?random=1.webp";
const Image2: string = "https://picsum.photos/500/500?random=2.webp";
const Image3: string = "https://picsum.photos/500/500?random=3.webp";
const Image4: string = "https://picsum.photos/500/500?random=4.webp";
const Image5: string = "https://picsum.photos/500/500?random=5.webp";

const images: string[] = [Image1, Image2, Image3, Image4, Image5];

function ImageComponent() {
  const renderImages = images.map((image: string) => (
    <img
      src={image}
      alt="Image"
      key={images.indexOf(image)}
      className="ImageClass"
    />
  ));

  return <div className="flex gap-4 overflow-auto">{renderImages}</div>;
}

export default ImageComponent;
