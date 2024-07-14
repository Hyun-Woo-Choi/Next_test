import styles from './global.module.css';
import BookCountsLineChart from './bookCountsLineChart';
export default function Page() {
  return (
    <>
      <h1 className={styles.title_texts}>
        Diaspora Voices In Translation
      </h1>
      <p className={styles.small_texts}>
        This is an ongoing project of tracing and charting the
        transnational migratory journey of diasporic novels. The focus
        of this project is to create a digital archive of novels
        written in English by diasporic authors based in the US
        post-9/11, with a particular emphasis on the way in which
        diasporic literature is marketed and accepted by the Korean
        audience. The archive will include a record of blurbs and
        other textual advertisements that are used to promote books in
        the Korean book market.
      </p>
      <BookCountsLineChart/>
    </>
  );
}
