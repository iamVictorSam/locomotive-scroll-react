import "./message-style.css";

const Message = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="6" //   data-scroll
      className="message-section"
    >
      <p data-scroll className="message">
        Drop a Message
      </p>
      <div
        className=" op-class"
        data-scroll
        data-scroll-repeat
        data-scroll-class="fadeIn"
        data-scroll-speed="2"
      >
        <input type="text" name="fullName" placeholder="Full Name" id="" />
        <input type="text" name="email" placeholder="Enter Email" id="" />
        <textarea name="" placeholder="Message" id="" />
      </div>
    </section>
  );
};

export default Message;
