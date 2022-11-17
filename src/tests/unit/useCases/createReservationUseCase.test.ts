import 'reflect-metadata'
import ReservationRepository from "../../../services/implementations/reservationRepository"
import CreateReservationUseCase from "../../../useCases/createReservation/createReservationUseCase"

describe('Create reservations', ()=>{
    // SUT System Under Test
    const repository = new ReservationRepository();
    const sut = new CreateReservationUseCase(repository)

    test('Deve ser possível criar uma publicação', () => {
        const newReservation = sut.execute({name:"a", date: new Date(), phone: 'asa', places: 3})

        expect(newReservation).not.toBeNull()
    })
})