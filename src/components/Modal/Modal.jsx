export default function Modal({ imgSrc, setModalFlag }) {
  return (
    <>
      <div
        className="my-modal vh-100 d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0"
        onClick={() => {
          setModalFlag(false);
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={imgSrc} alt="" className="w-100" />
        </div>
      </div>
    </>
  );
}
