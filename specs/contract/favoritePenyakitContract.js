/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { async } from 'regenerator-runtime';

const itActsAsFavoritePenyakitModel = (favoritePenyakit) => {
  it('should return the penyakit that has been added', async () => {
    favoritePenyakit.putPenyakit({ id: 1 });
    favoritePenyakit.putPenyakit({ id: 2 });

    expect(await favoritePenyakit.getPenyakit(1))
      .toEqual({ id: 1 });
    expect(await favoritePenyakit.getPenyakit(2))
      .toEqual({ id: 2 });
    expect(await favoritePenyakit.getPenyakit(3))
      .toEqual(undefined);
  });

  it('should refuse a penyakit from being added if it does not have the correct property', async () => {
    favoritePenyakit.putPenyakit({ aProperty: 'property' });

    expect(await favoritePenyakit.getAllPenyakits())
      .toEqual([]);
  });

  it('can return all of thepenyakits that have been added', async () => {
    favoritePenyakit.putPenyakit({ id: 1 });
    favoritePenyakit.putPenyakit({ id: 2 });

    expect(await favoritePenyakit.getAllPenyakits())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite penyakit', async () => {
    favoritePenyakit.putPenyakit({ id: 1 });
    favoritePenyakit.putPenyakit({ id: 2 });
    favoritePenyakit.putPenyakits({ id: 3 });

    await favoritePenyakit.deletePenyakit(1);

    expect(await favoritePenyakit.getAllPenyakits())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a penyakit even though the movie has not been added', async () => {
    favoritePenyakit.putPenyakit({ id: 1 });
    favoritePenyakit.putPenyakit({ id: 2 });
    favoritePenyakit.putPenyakit({ id: 3 });

    await favoritePenyakit.deletePenyakit(4);

    expect(await favoritePenyakit.getAllPenyakits())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoritePenyakitModel };
