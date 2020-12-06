import csv
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.impute import SimpleImputer
import pandas
from sklearn import tree
import pydotplus
from sklearn.tree import DecisionTreeClassifier
import matplotlib.pyplot as plt
import matplotlib.image as pltimg





dtree = DecisionTreeClassifier()
def DT_train():
    global dtree
    df = pandas.read_csv('DTFinal.csv')
    print(df)
    features = ['A']
    X = df[features]
    Y = df['B']
    dtree = dtree.fit(X, Y)

    
def DT_predict(importance):
    return(dtree.predict([[importance]]))



xtrain = []
ytrain = []
with open("HeartTraining.csv") as csvfile:
    reader = csv.reader(csvfile, quoting=csv.QUOTE_NONNUMERIC)
    for row in reader:
        xtrain.append(row[0:-1])
            #
        ytrain.append(row[-1])

imp_mean = SimpleImputer(missing_values=np.nan, strategy='mean')
imp_mean.fit(xtrain)
clf2 = RandomForestClassifier()




def train_RFC():
    alg1x_train = []
    alg1y_train = []
    alg1X_train = np.asarray(xtrain)
    alg1Y_train = np.asarray(ytrain)
    clf2.fit(alg1X_train, alg1Y_train)




def test_RFC():
    xtest =[]
    ytest= []
    with open("HeartTest.csv") as csvfile:
        reader = csv.reader(csvfile, quoting=csv.QUOTE_NONNUMERIC)
        for row in reader:
            xtest.append(row[0:-1])
            ytest.append(row[-1])
    XTest = np.asarray(xtest)
    YTest = np.asarray(ytest)
    print(clf2.score(XTest, YTest))
    
    
def RFC_predict(li):

    predicts = []
    x = [np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan,np.nan]
    importance = clf2.feature_importances_ 
#     importance_bool = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    sum_importance = 0
    predicts.append(x)
    print(predicts)
    for i in range(0,13):
        if li[i] == -1:
            continue
        else :
            predicts[0][i] = li[i]
            sum_importance +=importance[i]
            importance_bool[i] = 1
    y = imp_mean.transform(predicts)
#     print(importance,sum_importance)
#     print(clf2.predict(y))
    print(clf2.predict_proba(y))
#     print('fhshs',sum_importance+(max(clf2.predict_proba(y)[0][1],clf2.predict_proba(y)[0][0]))/2)
#     xxx = []
#     yyy= []

    return clf2.predict(y),max(clf2.predict_proba(y)[0][1],clf2.predict_proba(y)[0][0]),sum_importance



train_RFC()
DT_train()
clf2.feature_importances_ 
# RFC_predcit([234,46,8,-1,-1,-1])