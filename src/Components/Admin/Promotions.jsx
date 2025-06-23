import React, { useState } from 'react';


const Promotions = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: 'Summer Special',
      discount: '20%',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    discount: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleAddPromotion = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.discount) return;

    const newPromo = {
      ...formData,
      id: promotions.length + 1
    };
    setPromotions([...promotions, newPromo]);
    setFormData({ title: '', discount: '', startDate: '', endDate: '' });
  };

  const handleDelete = (id) => {
    setPromotions(promotions.filter(promo => promo.id !== id));
  };

  return (
    <div className="promotions-container">
      <h2>Promotions</h2>

      <form onSubmit={handleAddPromotion} className="promotion-form">
        <input
          type="text"
          name="title"
          placeholder="Promotion Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="discount"
          placeholder="Discount (e.g. 10%)"
          value={formData.discount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        <button type="submit">Add Promotion</button>
      </form>

      <div className="promotions-list">
        {promotions.length === 0 ? (
          <p>No promotions available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Discount</th>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo) => (
                <tr key={promo.id}>
                  <td>{promo.title}</td>
                  <td>{promo.discount}</td>
                  <td>{promo.startDate}</td>
                  <td>{promo.endDate}</td>
                  <td>
                    <button onClick={() => handleDelete(promo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Promotions;
