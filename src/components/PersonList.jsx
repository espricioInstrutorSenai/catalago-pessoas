import PersonCard from "./PersonCard";

export default function PersonList({ persons, onSelectPerson }) {
  return (
    <div>
      {persons.map((person) => (
        <PersonCard key={person.id} person={person} onClick={onSelectPerson}/>
      ))}
    </div>
  );
}