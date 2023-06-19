import toast from "react-hot-toast";

class Notification {
  static error(error: any) {
    if (error.response === "undefined") {
      return toast.error(
        "خطای غیر منتظره رخ داد. این خطا ممکن است به  دلایل امنیتی یا عدم دسترسی شما به اینترنت رخ داده باشد."
      );
    }
    if (error.response) {
      const { data } = error.response;

      return toast.error(data?.error.message || "خطایی رخ داده است.");
    }
    return toast.error(error || "خطایی رخ داده است.");
  }

  static success(message: string) {
    return toast.success(message);
  }

}
export default Notification;
