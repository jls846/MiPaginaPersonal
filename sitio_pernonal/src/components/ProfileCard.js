import '../App';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img 
        src="https://picsum.photos/200" 
        alt="Perfil" 
        className="profile-image" 
      />
      <h2>José Luis</h2>
      <p>Estudiante de desarrollo web, apasionado por la programación y nuevas tecnologías.</p>
    </div>
  );
}

export default ProfileCard;
