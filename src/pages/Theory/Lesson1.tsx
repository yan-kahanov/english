import React from "react";
import { Cell, MainTable, Text, Title } from ".";

type Props = {};

const TheoryLesson1: React.FC<Props> = () => {
  const present = (activeColumn: number, withTime?: boolean) => {
    return (
      <tr>
        <Cell className={activeColumn === 1 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="focus">Do</span>
                </td>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                </td>
                <td rowSpan={2}>
                  <span>love</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="focus">Does</span>
                </td>
                <td>
                  <div>he</div>
                  <div>she</div>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 2 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                </td>
                <td>
                  <span>love</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  love<span className="focus">s</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 3 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                </td>
                <td>
                  <span className="focus">don’t</span> <span>love</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span className="focus">doesn’t</span> <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        {withTime && <td className="time">Настоящее</td>}
      </tr>
    );
  };
  const past = (activeColumn: number, withTime?: boolean) => {
    return (
      <tr>
        <Cell className={activeColumn === 1 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="focus">Did</span>
                </td>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 2 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span>
                    lov<span className="focus">ed</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 3 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span className="focus">did not</span> <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        {withTime && <td className="time">Прошедшее</td>}
      </tr>
    );
  };
  const future = (activeColumn: number, withTime?: boolean) => {
    return (
      <tr>
        <Cell className={activeColumn === 1 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="focus">Will</span>
                </td>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 2 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span className="focus">will</span> <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        <Cell className={activeColumn === 3 ? "active" : ""}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>I</div>
                  <div>you</div>
                  <div>we</div>
                  <div>they</div>
                  <div>he</div>
                  <div>she</div>
                </td>
                <td>
                  <span className="focus">will not</span> <span>love</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Cell>
        {withTime && <td className="time">Будущее</td>}
      </tr>
    );
  };

  return (
    <div>
      <Text>
        На первом уроке мы научимся спрягать английские глаголы в трех простых
        временах: настоящее, будущее, прошедшее
      </Text>
      <Text>
        В каждом из времен разберемся, как построить утвердительное,
        вопросительное или отрицательное предложение.
      </Text>

      <Title>Настоящее время</Title>
      <Text>
        Утвердительные предложения образуются также как и в русском языке.
        Сначала идет местоимение, затем глагол.
      </Text>
      <Text>
        Если используются местоимения he (он), she (она) или it (это) то к
        глаголу добавляется окончание -s.
      </Text>
      <MainTable>
        <tbody>{present(2)}</tbody>
      </MainTable>

      <Text>
        Отрицательные предложения образуются при помощи вспомогательного глагола
        do + частица not
      </Text>
      <Text>
        Если используются местоимения he (он), she (она) или it (это) то вместо
        do используется его другая форма does.
      </Text>
      <Text>
        Часто используются сокращения: do not = don’t и does not = doesn’t
      </Text>
      <MainTable>
        <tbody>{present(3)}</tbody>
      </MainTable>

      <Text>
        Вопросительные предложения также образуются при помощи вспомогательного
        глагола do (does).
      </Text>
      <Text>
        Для образования вопроса этот глагол ставится в начале предложения.
      </Text>
      <MainTable>
        <tbody>{present(1)}</tbody>
      </MainTable>

      <Title>Прошедшее время</Title>
      <Text>
        Утвердительные предложения образуются также как и в настоящем времени,
        только используется вторая форма глагола.
      </Text>
      <Text>
        Это означает, что для правильных глаголов прибавляется окончание -ed.
      </Text>
      <MainTable>
        <tbody>{past(2)}</tbody>
      </MainTable>

      <Text>
        Отрицательные предложения образуются при помощи глагола did с частицей
        not (didn’t)
      </Text>
      <MainTable>
        <tbody>{past(3)}</tbody>
      </MainTable>

      <Text>
        Вопросительные предложения также образуются при помощи глагола did,
        который ставится в начале предложения.
      </Text>
      <MainTable>
        <tbody>{past(1)}</tbody>
      </MainTable>

      <Title>Будущее время</Title>
      <Text>
        Утвердительные предложения образуются при помощи глагола will.
      </Text>
      <MainTable>
        <tbody>{future(2)}</tbody>
      </MainTable>

      <Text>
        Отрицательные предложения образуются при помощи глагола will с частицей
        not (won’t)
      </Text>
      <MainTable>
        <tbody>{future(3)}</tbody>
      </MainTable>

      <Text>
        Вопросительные предложения также образуются при помощи глагола will,
        который ставится в начале предложения.
      </Text>
      <MainTable>
        <tbody>{future(1)}</tbody>
      </MainTable>

      <Title>Таблица времен simple</Title>
      <Text>Для того, чтобы это было легче запомнить, нарисуем таблицу:</Text>

      <MainTable>
        <tbody>
          <tr>
            <td>Вопрос</td>
            <td>Утверждение</td>
            <td>Отрицание</td>
            <td> </td>
          </tr>
          {future(0, true)}
          {present(0, true)}
          {past(0, true)}
        </tbody>
      </MainTable>
    </div>
  );
};

export default TheoryLesson1;
