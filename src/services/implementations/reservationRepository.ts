import { IReservation } from '../IReservation';
import { IReservationRepository } from '../IReservationRepository';

class ReservationRepository implements IReservationRepository {
  private reservationsMock: IReservation[] = [
    {
      name: 'Fulano de tal',
      phone: '51 987654321',
      date: new Date(),
      places: 2,
      value: 100,
      reservationId: '1',
    },
    {
      name: 'Cicrano de cá',
      phone: '51 918273645',
      date: new Date(),
      places: 8,
      value: 400,
      reservationId: '2',
    },
    {
      name: 'Beltrano Lopez',
      phone: '51 9537853',
      date: new Date(),
      places: 5,
      value: 300,
      reservationId: '3',
    },
    {
      name: 'Johnson Garcia',
      phone: '51 9337853',
      date: new Date(),
      places: 2,
      value: 120,
      reservationId: '4',
    },
  ];

  public create = async (data: any): Promise<IReservation> => {
    const newReservation = {
      reservationId: String(Math.floor(Math.random() * (100 ^ 2))),
      ...data,
      value: 150,
    };

    this.reservationsMock.push(newReservation);

    return newReservation;
  };

  public getOne = async (
    reservationId: string
  ): Promise<IReservation | undefined> => {
    const reservation = this.reservationsMock.find(
      (reservation) => reservation.reservationId === reservationId
    );

    return reservation;
  };

  public getMany = async (): Promise<IReservation[] | undefined> => {
    return this.reservationsMock;
  };

  public update = async (
    reservationId: string,
    data: any
  ): Promise<IReservation | undefined> => {
    let found = this.reservationsMock.find(
      (reservation) => reservation.reservationId === reservationId
    );

    if (found) {
      const updatedReservation = { ...found, ...data };

      this.reservationsMock.map(reservation => {
        if(reservation.reservationId === reservationId){
          return updatedReservation
        }
        return reservation
      })
    }

    return found;
  };

  public delete = async (id: string): Promise<boolean> => {
    const a =  this.reservationsMock.filter(reservation =>{
      if(reservation.reservationId !== id) return reservation;
    });

    const deletado = this.reservationsMock.find(
      (reservation) => reservation.reservationId === id
    );
    
    return !deletado;
  };
}

export default ReservationRepository;
