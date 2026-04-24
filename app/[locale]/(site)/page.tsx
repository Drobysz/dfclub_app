import {
  Subscription,
  Feedback,
  FAQ,
  Illustration,
  Referal,
  Courses,
  Advantages
} from "./_sections"

export default function Main() {
  return (
    <>
      <Illustration />
      <Advantages />
      <Courses />
      <Referal />
      <Subscription />
      <Feedback />
      <FAQ />
    </>
  );
}
