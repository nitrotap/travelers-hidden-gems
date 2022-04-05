async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('textarea[name="content"]').value;
  const latLon = document.querySelector('input[name="lat-lon"]').value;
  const locationArray = latLon.split(',').map(coord => coord.trim());
  const [latitude, longitude] = [locationArray[0], locationArray[1]];

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      contents,
      latitude,
      longitude
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);