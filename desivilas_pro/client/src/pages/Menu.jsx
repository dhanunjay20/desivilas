import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  {
    category: 'Appetizers',
    url: 'https://www.desivilas.com/order#categoryHeading-1187268',
    items: [
      { name: 'Gobi Manchurian', description: 'Crispy cauliflower florets tossed in tangy Manchurian sauce.', image: 'https://via.placeholder.com/120?text=Gobi+Manchurian' },
      { name: 'Chicken 65', description: 'Spicy deep-fried chicken bites with curry leaves.', image: 'https://via.placeholder.com/120?text=Chicken+65' },
      { name: 'Garlic Butter Chicken', description: 'Succulent chicken cooked in garlic butter sauce.', image: 'https://via.placeholder.com/120?text=Garlic+Butter+Chicken' },
      { name: 'Shrimp 65', description: 'Crispy fried shrimp spiced just right.', image: 'https://via.placeholder.com/120?text=Shrimp+65' },
      { name: 'Chilli Prawn', description: 'Prawns stir-fried with chillies and spices.', image: 'https://via.placeholder.com/120?text=Chilli+Prawn' },
    ],
  },
  {
    category: 'Beverage',
    url: 'https://www.desivilas.com/order#categoryHeading-1187269',
    items: [
      { name: 'Chickoo Milkshake', description: 'Sweet and creamy chickoo fruit milkshake.', image: 'https://via.placeholder.com/120?text=Chickoo+Milkshake' },
      { name: 'Masala Tea', description: 'Traditional Indian spiced tea.', image: 'https://via.placeholder.com/120?text=Masala+Tea' },
      { name: 'Diet Coke', description: 'Chilled diet coke for refreshment.', image: 'https://via.placeholder.com/120?text=Diet+Coke' },
      { name: 'Goli Soda Orange', description: 'Orange-flavored sparkling soda.', image: 'https://via.placeholder.com/120?text=Goli+Soda+Orange' },
      { name: 'Goli Soda Virgin Mojito', description: 'Refreshing virgin mojito soda.', image: 'https://via.placeholder.com/120?text=Virgin+Mojito' },
      { name: 'Goli Soda Clear Lemon', description: 'Zesty clear lemon soda.', image: 'https://via.placeholder.com/120?text=Clear+Lemon' },
      { name: 'Goli Soda Jeera', description: 'Spiced jeera flavored soda.', image: 'https://via.placeholder.com/120?text=Jeera+Soda' },
      { name: 'Mango Lassi', description: 'Sweet mango yogurt drink.', image: 'https://via.placeholder.com/120?text=Mango+Lassi' },
      { name: 'Badam Milk', description: 'Almond flavored milkshake.', image: 'https://via.placeholder.com/120?text=Badam+Milk' },
      { name: 'Coke Tin', description: 'Classic chilled coke in a tin.', image: 'https://via.placeholder.com/120?text=Coke+Tin' },
      { name: 'Small Tea', description: 'Small cup of hot Indian tea.', image: 'https://via.placeholder.com/120?text=Small+Tea' },
      { name: 'Thums Up', description: 'Popular Indian cola drink.', image: 'https://via.placeholder.com/120?text=Thums+Up' },
      { name: 'Fanta Tin', description: 'Orange flavoured soda in a tin.', image: 'https://via.placeholder.com/120?text=Fanta' },
      { name: 'Punjabi Lassi', description: 'Traditional yogurt drink from Punjab.', image: 'https://via.placeholder.com/120?text=Punjabi+Lassi' },
    ],
  },
  {
    category: 'Breakfast',
    url: 'https://www.desivilas.com/order#categoryHeading-1187262',
    items: [
      { name: 'Mysore Bonda', description: 'Light and fluffy fried rice flour balls.', image: 'https://via.placeholder.com/120?text=Mysore+Bonda' },
      { name: 'Sambar extra 8oz', description: 'Extra portion of tangy lentil stew.', image: 'https://via.placeholder.com/120?text=Sambar' },
    ],
  },
  {
    category: 'Naan',
    url: 'https://www.desivilas.com/order#categoryHeading-1187267',
    items: [
      { name: 'Plain Naan', description: 'Traditional Indian flatbread.', image: 'https://via.placeholder.com/120?text=Plain+Naan' },
      { name: 'Garlic Naan', description: 'Flatbread infused with garlic.', image: 'https://via.placeholder.com/120?text=Garlic+Naan' },
      { name: 'Butter Naan', description: 'Soft naan with a butter coating.', image: 'https://via.placeholder.com/120?text=Butter+Naan' },
      { name: 'Bullet Naan', description: 'Spicy stuffed variant of naan.', image: 'https://via.placeholder.com/120?text=Bullet+Naan' },
      { name: 'Chilli Garlic Naan', description: 'Naan topped with chilli and garlic.', image: 'https://via.placeholder.com/120?text=Chilli+Garlic+Naan' },
    ],
  },
  {
    category: 'Curries',
    url: 'https://www.desivilas.com/order#categoryHeading-1187266',
    items: [
      { name: 'Butter Chicken or Chicken Tikka Masala Half (12OZ)', description: 'Creamy tomato based curry with boneless chicken and rich Indian spices.', image: 'https://via.placeholder.com/120?text=Butter+Chicken+Half' },
      { name: 'Butter Chicken or Chicken Tikka Masala Full (24OZ)', description: 'Creamy tomato based curry with boneless chicken and rich Indian spices.', image: 'https://via.placeholder.com/120?text=Butter+Chicken+Full' },
      { name: 'Paneer Tikka Masala or Paneer Butter Masala Full (24 OZ)', description: 'Rich paneer curry cooked in traditional spices.', image: 'https://via.placeholder.com/120?text=Paneer+Masala' },
      { name: 'Sambar Half', description: 'Traditional tangy lentil stew.', image: 'https://via.placeholder.com/120?text=Sambar+Half' },
      { name: 'Sambar Full', description: 'Full portion of sambar.', image: 'https://via.placeholder.com/120?text=Sambar+Full' },
      { name: 'Paneer Tikka Masala or Paneer Butter Masala Half (12OZ)', description: 'Half portion rich paneer curry.', image: 'https://via.placeholder.com/120?text=Paneer+Half' },
      { name: 'Chicken Curry of the Day Half', description: 'Daily special chicken curry half portion.', image: 'https://via.placeholder.com/120?text=Chicken+Curry+Half' },
      { name: 'Chicken Curry of the Day Full', description: 'Daily special chicken curry full portion.', image: 'https://via.placeholder.com/120?text=Chicken+Curry+Full' },
    ],
  },
  {
    category: 'Rice Specials',
    url: 'https://www.desivilas.com/order#categoryHeading-1187265',
    items: [
      { name: 'Chicken Fry Piece Biryani Boneless', description: 'Aromatic biryani with boneless chicken.', image: 'https://via.placeholder.com/120?text=Chicken+Biryani' },
      { name: 'Boneless Chicken Biryani', description: 'Fragrant rice cooked with spices and chicken.', image: 'https://via.placeholder.com/120?text=Boneless+Biryani' },
      { name: 'Mixed Veg. Biryani', description: 'Biryani loaded with assorted vegetables.', image: 'https://via.placeholder.com/120?text=Mixed+Veg+Biryani' },
      { name: 'Paneer Biryani', description: 'Spiced biryani with cubes of paneer.', image: 'https://via.placeholder.com/120?text=Paneer+Biryani' },
      { name: 'Pachimirchi Boneless Chicken Biryani', description: 'Fiery boneless chicken biryani.', image: 'https://via.placeholder.com/120?text=Pachimirchi+Biryani' },
      { name: 'Chicken 65 Biryani', description: 'Biryani with spicy Chicken 65 pieces.', image: 'https://via.placeholder.com/120?text=Chicken+65+Biryani' },
      { name: 'Goat Fry Piece Biryani', description: 'Biryani with flavorful goat fry pieces.', image: 'https://via.placeholder.com/120?text=Goat+Biryani' },
      { name: 'Curd rice', description: 'Comforting tangy curd with rice.', image: 'https://via.placeholder.com/120?text=Curd+Rice' },
      { name: 'Pachimirchi Paneer Pulav', description: 'Spiced paneer pulav.', image: 'https://via.placeholder.com/120?text=Paneer+Pulav' },
      { name: 'Pachimirchi Paneer Biryani', description: 'Spiced paneer biryani.', image: 'https://via.placeholder.com/120?text=Paneer+Biryani' },
      { name: 'Festival Combo', description: 'Special festival combo platter.', image: 'https://via.placeholder.com/120?text=Festival+Combo' },
      { name: 'Ambur Mutton Fry Piece Biryani', description: 'Mutton biryani with Ambur style fry.', image: 'https://via.placeholder.com/120?text=Ambur+Mutton+Biryani' },
      { name: 'Chilli Chustnut Manchurian', description: 'Spiced chilli chestnut Manchurian.', image: 'https://via.placeholder.com/120?text=Chilli+Chestnut' },
    ],
  },
  {
    category: 'Desserts',
    url: 'https://www.desivilas.com/order#categoryHeading-1187264',
    items: [
      { name: 'Gulab Jamun (4)', description: 'Soft milk dumplings soaked in rose syrup.', image: 'https://via.placeholder.com/120?text=Gulab+Jamun+4' },
      { name: 'Gulab Jamun (1)', description: 'Single milk dumpling dessert.', image: 'https://via.placeholder.com/120?text=Gulab+Jamun+1' },
      { name: 'Rasmalai', description: 'Milk cakes in sweetened condensed milk.', image: 'https://via.placeholder.com/120?text=Rasmalai' },
      { name: 'Apricot Delight', description: 'Sweet apricot dessert.', image: 'https://via.placeholder.com/120?text=Apricot+Delight' },
    ],
  },
  {
    category: 'Lunch Specials',
    url: 'https://www.desivilas.com/order#categoryHeading-1187263',
    description: 'Lunch combos only on week days from 11 AM to 2 PM',
    items: [
      { name: 'Extra Naan In Lunch', description: 'Additional naan bread for lunch combos.', image: 'https://via.placeholder.com/120?text=Extra+Naan' },
      { name: 'Millet Veg Combo', description: 'Healthy millet with vegetable combo.', image: 'https://via.placeholder.com/120?text=Millet+Veg+Combo' },
    ],
  },
  {
    category: 'Snacks',
    url: 'https://www.desivilas.com/order#categoryHeading-1200741',
    description: 'Available Daily from 4:00 PM to 8:30 PM',
    items: [
      { name: 'Samosa 1 Piece', description: 'Crispy potato stuffed snack.', image: 'https://via.placeholder.com/120?text=Samosa+1' },
      { name: 'Samosa 3 Piece', description: 'Three piece samosa platter.', image: 'https://via.placeholder.com/120?text=Samosa+3' },
      { name: 'Onion Samosa(4)', description: 'Four onion filled samosas.', image: 'https://via.placeholder.com/120?text=Onion+Samosa' },
      { name: 'Punugulu', description: 'Fried lentil batter bites.', image: 'https://via.placeholder.com/120?text=Punugulu' },
      { name: 'Aloo Samosa(3)', description: 'Potato stuffed samosas.', image: 'https://via.placeholder.com/120?text=Aloo+Samosa' },
      { name: 'Stuffed Mirchi Bajji (4)', description: 'Stuffed chili fritters.', image: 'https://via.placeholder.com/120?text=Mirchi+Bajji+4' },
      { name: 'Mirchi Bajji (4)', description: 'Crispy chili fritters.', image: 'https://via.placeholder.com/120?text=Mirchi+Bajji' },
      { name: 'Aloo Samosa(1)', description: 'Single potato samosa.', image: 'https://via.placeholder.com/120?text=Aloo+Samosa+1' },
      { name: 'Stuffed Mirchi Bajji (1)', description: 'Single stuffed chili fritter.', image: 'https://via.placeholder.com/120?text=Mirchi+Bajji+1' },
      { name: 'Snacks Platter', description: 'Mixed platter of assorted snacks.', image: 'https://via.placeholder.com/120?text=Snacks+Platter' },
      { name: 'Chudava(Atukulu)', description: 'Thin crispy rice flakes.', image: 'https://via.placeholder.com/120?text=Chudava' },
      { name: 'Soryakaya/Anapakaya/Bottle guard vada', description: 'Crispy bottle gourd fritters.', image: 'https://via.placeholder.com/120?text=Vada' },
      { name: 'Dahi Puri', description: 'Puffed puris with yogurt and chutneys.', image: 'https://via.placeholder.com/120?text=Dahi+Puri' },
      { name: 'Pani Puri Plate', description: 'Water filled puris with flavor.', image: 'https://via.placeholder.com/120?text=Pani+Puri' },
      { name: 'Bhel Puri', description: 'Spicy puffed rice mixture.', image: 'https://via.placeholder.com/120?text=Bhel+Puri' },
      { name: 'Sev Puri', description: 'Crunchy sev topped puris.', image: 'https://via.placeholder.com/120?text=Sev+Puri' },
      { name: 'Aloo Chat', description: 'Spiced potato chat.', image: 'https://via.placeholder.com/120?text=Aloo+Chat' },
      { name: 'Corn Chips', description: 'Savory crispy corn chips.', image: 'https://via.placeholder.com/120?text=Corn+Chips' },
    ],
  },
  {
    category: 'Add On',
    url: 'https://www.desivilas.com/order#categoryHeading-1207005',
    items: [
      { name: 'Salan', description: 'Spicy curry sauce.', image: 'https://via.placeholder.com/120?text=Salan' },
      { name: 'Raitha', description: 'Cooling yogurt condiment.', image: 'https://via.placeholder.com/120?text=Raitha' },
    ],
  },
  {
    category: 'Dosa',
    url: 'https://www.desivilas.com/order#categoryHeading-1216859',
    description: 'All items in this category must be ordered at least 0.5 hours in advance. Available from 9.30 AM to 9 PM',
    items: [
      { name: 'Ghee Dosa', description: 'Buttery crisp dosa.', image: 'https://via.placeholder.com/120?text=Ghee+Dosa' },
      { name: 'Masala Dosa', description: 'Dosa filled with spiced potatoes.', image: 'https://via.placeholder.com/120?text=Masala+Dosa' },
      { name: 'Mysore Masala Dosa', description: 'Spicy Mysore style masala dosa.', image: 'https://via.placeholder.com/120?text=Mysore+Dosa' },
      { name: 'Onion Dosa', description: 'Dosa with fresh onion topping.', image: 'https://via.placeholder.com/120?text=Onion+Dosa' },
      { name: 'Plain Dosa', description: 'Classic plain dosa.', image: 'https://via.placeholder.com/120?text=Plain+Dosa' },
      { name: 'Set Dosa', description: 'Soft multi-layered dosa set.', image: 'https://via.placeholder.com/120?text=Set+Dosa' },
      { name: 'Rava Dosa', description: 'Semolina crisp dosa.', image: 'https://via.placeholder.com/120?text=Rava+Dosa' },
      { name: 'Onion Rava Dosa', description: 'Semolina dosa topped with onions.', image: 'https://via.placeholder.com/120?text=Onion+Rava+Dosa' },
      { name: 'Onion Masala Rava Dosa', description: 'Masala filled onion rava dosa.', image: 'https://via.placeholder.com/120?text=Masala+Rava+Dosa' },
      { name: 'Plain Uttapam', description: 'Thick pancake with minimal toppings.', image: 'https://via.placeholder.com/120?text=Plain+Uttapam' },
      { name: 'Mixed Veg Uttapam', description: 'Uttapam topped with mixed vegetables.', image: 'https://via.placeholder.com/120?text=Veg+Uttapam' },
      { name: 'Onion Uttapam', description: 'Thick uttapam topped with onions.', image: 'https://via.placeholder.com/120?text=Onion+Uttapam' },
      { name: 'Karam Podi Dosa', description: 'Spicy dosa with chili powder.', image: 'https://via.placeholder.com/120?text=Karam+Podi+Dosa' },
      { name: 'Cheese Dosa', description: 'Dosa stuffed with cheese.', image: 'https://via.placeholder.com/120?text=Cheese+Dosa' },
      { name: 'Paneer Dosa', description: 'Dosa stuffed with paneer.', image: 'https://via.placeholder.com/120?text=Paneer+Dosa' },
      { name: 'Egg Dosa', description: 'Dosa topped with egg.', image: 'https://via.placeholder.com/120?text=Egg+Dosa' },
      { name: 'Masala Rava Dosa', description: 'Spiced semolina dosa.', image: 'https://via.placeholder.com/120?text=Masala+Rava+Dosa' },
      { name: 'Ghee Karam Dosa', description: 'Buttery spicy dosa.', image: 'https://via.placeholder.com/120?text=Ghee+Karam+Dosa' },
    ],
  },
  {
    category: 'Catering',
    url: 'https://www.desivilas.com/order#categoryHeading-1229718',
    items: [
      { name: 'Poornam Boorelu - half tray', description: 'Sweet stuffed dumplings, half tray.', image: 'https://via.placeholder.com/120?text=Poornam+Boorelu' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function MenuPage() {
  const [expanded, setExpanded] = useState(null);

  const toggleCategory = (cat) => {
    setExpanded(expanded === cat ? null : cat);
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-orange-600">Our Menu</h1>
      <section className="max-w-5xl mx-auto space-y-10">
        {menuData.map(({ category, items, url, description }) => (
          <article key={category} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center px-8 py-6 text-left text-3xl font-semibold text-orange-700 hover:bg-orange-100 transition-colors"
              aria-expanded={expanded === category}
              aria-controls={`section-${category}`}
            >
              <a href={url} target="_blank" rel="noreferrer" className="underline decoration-orange-400">
                {category}
              </a>
              <span className="ml-4 text-4xl select-none">{expanded === category ? '−' : '+'}</span>
            </button>

            <AnimatePresence>
              {expanded === category && (
                <motion.ul
                  key="content"
                  id={`section-${category}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                  className="px-8 pb-8 space-y-6"
                >
                  {description && (
                    <motion.p
                      className="text-sm italic text-gray-600 max-w-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {description}
                    </motion.p>
                  )}
                  {items.map(({ name, description, image }, idx) => (
                    <motion.li
                      key={name + idx}
                      variants={itemVariants}
                      className="flex flex-col md:flex-row items-start border-b border-gray-200 pb-6 last:border-none"
                    >
                      <img
                        src={image || 'https://via.placeholder.com/120?text=No+Image'}
                        alt={name}
                        className="w-28 h-20 object-cover rounded-lg md:mr-6 mb-4 md:mb-0 flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 capitalize">{name}</h3>
                        {description && <p className="text-sm text-gray-600 mt-1 max-w-xl">{description}</p>}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </article>
        ))}
      </section>
    </main>
  );
}
