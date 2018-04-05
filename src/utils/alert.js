import Swal from 'sweetalert2'

export function warningAlert (message) {
  return Swal({
    title: 'Terjadi Kesalahan',
    text: message,
    type: 'error',
    confirmButtonText: 'Ok'
  })
}

export function confirmationAlert (title, message, onSuccess, onCancel) {
  return Swal({
    title: title,
    text: message,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.value) {
      onSuccess()
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      onCancel()
    }
  })
}

export function successAlert (message) {
  return Swal({
    title: 'Sukses!',
    text: message,
    type: 'success',
    confirmButtonText: 'Ok'
  })
}
