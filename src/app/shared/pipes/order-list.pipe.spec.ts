import { OrderListPipe } from './order-list.pipe';
import * as mockTracks from '../../data/tracks.json' 
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', () =>{

    //Arrange
    const pipe = new OrderListPipe()
    const { data } = mockTracks

    //Act
    const result: TrackModel[] = pipe.transform(data)

    //Assert
    expect(result).toEqual(data)

  })

  it('Probar si se ordena de manera ASC', () =>{

    const pipe = new OrderListPipe;
    const { data }: any = mockTracks
    const firstValue = data.find((value: any) => value._id === 7)
    const lastValue = data.find((value: any) => value._id === 6)

    const result: TrackModel[] = pipe.transform(data, 'name')
    const firstResult = result[0];
    const lastResult = result[data.length - 1];

    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)



  })

});
