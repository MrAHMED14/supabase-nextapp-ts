import { getUserNotes } from "@/lib/db/action"

const Notes = async () => {
  const notes = await getUserNotes()
  return (
    <>
      {notes ? (
        notes.map((note, i) => (
          <p key={note.id}>
            <span className="text-black/50 dark:text-white/20">{i + 1}-</span>{" "}
            {note.title}
          </p>
        ))
      ) : (
        <>
          <p>You don&rsquo;t have any notes</p>
        </>
      )}
    </>
  )
}

export default Notes
